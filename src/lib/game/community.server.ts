/**
 * Server-only community bank, votes, leaderboard, and used feed.
 */
import { createHash } from "node:crypto";
import { getSql, type Sql } from "@/lib/db";
import {
  ALL_CONFESSION_LINES,
  type CommunityTally,
  type ConfessionStyle,
  type CommunityPrefs,
  type VoteValue,
} from "./pins";

export interface RankedEntry {
  body: string;
  style: ConfessionStyle;
  tally: CommunityTally;
  usedCount: number;
}

export function confessionIdFromBody(body: string): string {
  return createHash("sha256").update(body).digest("hex").slice(0, 24);
}

async function ensureSchema(sql: Sql): Promise<void> {
  await sql.query(`
    CREATE TABLE IF NOT EXISTS confession_bank (
      id TEXT PRIMARY KEY,
      body TEXT NOT NULL UNIQUE,
      style TEXT NOT NULL,
      ups INTEGER NOT NULL DEFAULT 0,
      downs INTEGER NOT NULL DEFAULT 0,
      neutrals INTEGER NOT NULL DEFAULT 0,
      score INTEGER NOT NULL DEFAULT 0,
      used_count INTEGER NOT NULL DEFAULT 0,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `);
  await sql.query(`
    ALTER TABLE confession_bank
    ADD COLUMN IF NOT EXISTS used_count INTEGER NOT NULL DEFAULT 0
  `);
  await sql.query(`
    CREATE INDEX IF NOT EXISTS confession_bank_score_idx
    ON confession_bank (score DESC, ups DESC)
  `);
  await sql.query(`
    CREATE INDEX IF NOT EXISTS confession_bank_used_idx
    ON confession_bank (used_count DESC, score DESC)
  `);
  await sql.query(`
    CREATE TABLE IF NOT EXISTS confession_votes (
      voter_id TEXT NOT NULL,
      confession_id TEXT NOT NULL REFERENCES confession_bank (id) ON DELETE CASCADE,
      vote SMALLINT NOT NULL CHECK (vote IN (-1, 0, 1)),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      PRIMARY KEY (voter_id, confession_id)
    )
  `);
  await sql.query(`
    CREATE INDEX IF NOT EXISTS confession_votes_confession_idx
    ON confession_votes (confession_id)
  `);
}

let bankReady: Promise<void> | null = null;

async function withBank(): Promise<Sql> {
  const sql = await getSql();
  bankReady ??= (async () => {
    await ensureSchema(sql);
    for (const line of ALL_CONFESSION_LINES) {
      const id = confessionIdFromBody(line.body);
      await sql`
        INSERT INTO confession_bank (id, body, style, ups, downs, neutrals, score, used_count)
        VALUES (${id}, ${line.body}, ${line.style}, 0, 0, 0, 0, 0)
        ON CONFLICT (body) DO NOTHING
      `;
    }
  })().catch((err) => {
    bankReady = null;
    throw err;
  });
  await bankReady;
  return sql;
}

export async function ensureConfessionBank(): Promise<void> {
  await withBank();
}

export async function getCommunityPrefs(): Promise<CommunityPrefs> {
  const sql = await withBank();

  const rows = await sql<{
    body: string;
    style: string;
    ups: number;
    downs: number;
    neutrals: number;
    score: number;
  }>`
    SELECT body, style, ups, downs, neutrals, score
    FROM confession_bank
  `;

  const bodyScores: Record<string, CommunityTally> = {};
  const styleScores: Partial<Record<ConfessionStyle, number>> = {};

  for (const r of rows) {
    bodyScores[r.body] = {
      ups: Number(r.ups) || 0,
      downs: Number(r.downs) || 0,
      neutrals: Number(r.neutrals) || 0,
      score: Number(r.score) || 0,
    };
    const style = r.style as ConfessionStyle;
    const weight = (Number(r.ups) || 0) - (Number(r.downs) || 0);
    styleScores[style] = (styleScores[style] ?? 0) + weight;
  }

  for (const k of Object.keys(styleScores) as ConfessionStyle[]) {
    const v = styleScores[k] ?? 0;
    styleScores[k] = Math.max(-12, Math.min(12, Math.round(v / 3)));
  }

  return { bodyScores, styleScores };
}

export async function getVoterVotes(
  voterId: string,
): Promise<Record<string, VoteValue>> {
  if (!voterId || voterId.length < 8) return {};
  const sql = await withBank();
  const rows = await sql<{ body: string; vote: number }>`
    SELECT b.body, v.vote
    FROM confession_votes v
    JOIN confession_bank b ON b.id = v.confession_id
    WHERE v.voter_id = ${voterId}
  `;
  const out: Record<string, VoteValue> = {};
  for (const r of rows) {
    const vote = Number(r.vote);
    if (vote === 1 || vote === -1) out[r.body] = vote as VoteValue;
  }
  return out;
}

export async function castCommunityVote(input: {
  voterId: string;
  body: string;
  style: ConfessionStyle;
  vote: VoteValue;
}): Promise<{
  tally: CommunityTally;
  myVote: VoteValue | null;
}> {
  const { voterId, body, style, vote } = input;
  if (!voterId || voterId.length < 8 || voterId.length > 80) {
    throw new Error("Invalid voter");
  }
  if (!body || body.length > 500) throw new Error("Invalid confession");
  if (vote !== 1 && vote !== -1) throw new Error("Invalid vote");

  const sql = await withBank();
  const id = confessionIdFromBody(body);

  await sql`
    INSERT INTO confession_bank (id, body, style, ups, downs, neutrals, score, used_count)
    VALUES (${id}, ${body}, ${style}, 0, 0, 0, 0, 0)
    ON CONFLICT (body) DO NOTHING
  `;
  await sql`
    UPDATE confession_bank SET style = ${style} WHERE id = ${id}
  `;

  const existing = await sql<{ vote: number }>`
    SELECT vote FROM confession_votes
    WHERE voter_id = ${voterId} AND confession_id = ${id}
  `;
  const prev = existing[0] ? (Number(existing[0].vote) as VoteValue) : null;

  if (prev === vote) {
    await sql`
      DELETE FROM confession_votes
      WHERE voter_id = ${voterId} AND confession_id = ${id}
    `;
    await applyDelta(sql, id, prev, null);
    const tally = await fetchTally(sql, id);
    return { tally, myVote: null };
  }

  if (prev === null) {
    await sql`
      INSERT INTO confession_votes (voter_id, confession_id, vote, updated_at)
      VALUES (${voterId}, ${id}, ${vote}, now())
    `;
    await applyDelta(sql, id, null, vote);
  } else {
    await sql`
      UPDATE confession_votes
      SET vote = ${vote}, updated_at = now()
      WHERE voter_id = ${voterId} AND confession_id = ${id}
    `;
    await applyDelta(sql, id, prev, vote);
  }

  const tally = await fetchTally(sql, id);
  return { tally, myVote: vote };
}

/** Mark a confession as used (posted) — lands in the Used section */
export async function markConfessionUsed(input: {
  body: string;
  style: ConfessionStyle;
}): Promise<{ usedCount: number; tally: CommunityTally }> {
  const { body, style } = input;
  if (!body || body.length > 500) throw new Error("Invalid confession");
  const sql = await withBank();
  const id = confessionIdFromBody(body);
  await sql`
    INSERT INTO confession_bank (id, body, style, ups, downs, neutrals, score, used_count)
    VALUES (${id}, ${body}, ${style}, 0, 0, 0, 0, 0)
    ON CONFLICT (body) DO NOTHING
  `;
  await sql`
    UPDATE confession_bank
    SET used_count = used_count + 1, style = ${style}
    WHERE id = ${id}
  `;
  const rows = await sql<{ used_count: number }>`
    SELECT used_count FROM confession_bank WHERE id = ${id}
  `;
  const tally = await fetchTally(sql, id);
  return { usedCount: Number(rows[0]?.used_count) || 1, tally };
}

async function applyDelta(
  sql: Sql,
  id: string,
  from: VoteValue | null,
  to: VoteValue | null,
): Promise<void> {
  const d = { ups: 0, downs: 0, neutrals: 0 };
  const dec = (v: VoteValue) => {
    if (v === 1) d.ups -= 1;
    else if (v === -1) d.downs -= 1;
    else d.neutrals -= 1;
  };
  const inc = (v: VoteValue) => {
    if (v === 1) d.ups += 1;
    else if (v === -1) d.downs += 1;
    else d.neutrals += 1;
  };
  if (from !== null) dec(from);
  if (to !== null) inc(to);

  await sql`
    UPDATE confession_bank
    SET
      ups = GREATEST(0, ups + ${d.ups}),
      downs = GREATEST(0, downs + ${d.downs}),
      neutrals = GREATEST(0, neutrals + ${d.neutrals})
    WHERE id = ${id}
  `;
  await sql`
    UPDATE confession_bank
    SET score = ups - downs
    WHERE id = ${id}
  `;
}

async function fetchTally(sql: Sql, id: string): Promise<CommunityTally> {
  const rows = await sql<{
    ups: number;
    downs: number;
    neutrals: number;
    score: number;
  }>`
    SELECT ups, downs, neutrals, score FROM confession_bank WHERE id = ${id}
  `;
  const r = rows[0];
  return {
    ups: Number(r?.ups) || 0,
    downs: Number(r?.downs) || 0,
    neutrals: Number(r?.neutrals) || 0,
    score: Number(r?.score) || 0,
  };
}

function mapRows(
  rows: Array<{
    body: string;
    style: string;
    ups: number;
    downs: number;
    neutrals: number;
    score: number;
    used_count: number;
  }>,
): RankedEntry[] {
  return rows.map((r) => ({
    body: r.body,
    style: r.style as ConfessionStyle,
    tally: {
      ups: Number(r.ups) || 0,
      downs: Number(r.downs) || 0,
      neutrals: Number(r.neutrals) || 0,
      score: Number(r.score) || 0,
    },
    usedCount: Number(r.used_count) || 0,
  }));
}

/** Leaderboard: most upvoted confessions (score + ups) */
export async function getLeaderboard(limit = 50): Promise<RankedEntry[]> {
  const sql = await withBank();
  const rows = await sql<{
    body: string;
    style: string;
    ups: number;
    downs: number;
    neutrals: number;
    score: number;
    used_count: number;
  }>`
    SELECT body, style, ups, downs, neutrals, score, used_count
    FROM confession_bank
    WHERE ups > 0
    ORDER BY score DESC, ups DESC, downs ASC, created_at DESC
    LIMIT ${limit}
  `;
  return mapRows(rows);
}

/** Used feed: confessions others have marked as used / posted */
export async function getUsedConfessions(limit = 50): Promise<RankedEntry[]> {
  const sql = await withBank();
  const rows = await sql<{
    body: string;
    style: string;
    ups: number;
    downs: number;
    neutrals: number;
    score: number;
    used_count: number;
  }>`
    SELECT body, style, ups, downs, neutrals, score, used_count
    FROM confession_bank
    WHERE used_count > 0
    ORDER BY used_count DESC, score DESC, ups DESC, created_at DESC
    LIMIT ${limit}
  `;
  return mapRows(rows);
}
