import { createFileRoute } from "@tanstack/react-router";
import {
  castCommunityVote,
  getCommunityPrefs,
  getLeaderboard,
  getUsedConfessions,
  getVoterVotes,
  markConfessionUsed,
} from "@/lib/game/community.server";
import type { ConfessionStyle, VoteValue } from "@/lib/game/pins";

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

export const Route = createFileRoute("/api/confessions")({
  server: {
    handlers: {
      /** Community prefs + leaderboard + used feed + this voter's votes */
      GET: async ({ request }) => {
        try {
          const url = new URL(request.url);
          const voterId = url.searchParams.get("voterId") ?? "";
          const [prefs, leaderboard, used, myVotes] = await Promise.all([
            getCommunityPrefs(),
            getLeaderboard(50),
            getUsedConfessions(50),
            voterId ? getVoterVotes(voterId) : Promise.resolve({}),
          ]);
          return json({
            ok: true,
            prefs,
            leaderboard,
            used,
            myVotes,
          });
        } catch (err) {
          console.error("[api/confessions GET]", err);
          return json(
            { ok: false, error: err instanceof Error ? err.message : "Failed" },
            500,
          );
        }
      },

      /**
       * POST:
       * - vote: { voterId, body, style, vote: 1|-1 }
       * - used: { action: "used", body, style }
       */
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as {
            action?: string;
            voterId?: string;
            body?: string;
            style?: string;
            vote?: number;
          };

          const action = body.action ?? "vote";

          if (action === "used") {
            if (!body.body || !body.style) {
              return json({ ok: false, error: "Missing fields" }, 400);
            }
            const result = await markConfessionUsed({
              body: body.body,
              style: body.style as ConfessionStyle,
            });
            const [leaderboard, used] = await Promise.all([
              getLeaderboard(50),
              getUsedConfessions(50),
            ]);
            return json({ ok: true, ...result, leaderboard, used });
          }

          const vote = body.vote as VoteValue;
          if (vote !== 1 && vote !== -1) {
            return json({ ok: false, error: "vote must be 1 or -1" }, 400);
          }
          if (!body.voterId || !body.body || !body.style) {
            return json({ ok: false, error: "Missing fields" }, 400);
          }
          const result = await castCommunityVote({
            voterId: body.voterId,
            body: body.body,
            style: body.style as ConfessionStyle,
            vote,
          });
          const [prefs, leaderboard, used] = await Promise.all([
            getCommunityPrefs(),
            getLeaderboard(50),
            getUsedConfessions(50),
          ]);
          return json({
            ok: true,
            ...result,
            prefs,
            leaderboard,
            used,
          });
        } catch (err) {
          console.error("[api/confessions POST]", err);
          return json(
            { ok: false, error: err instanceof Error ? err.message : "Failed" },
            500,
          );
        }
      },
    },
  },
});
