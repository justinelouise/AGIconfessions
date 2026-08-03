/**
 * AGI Confessions Generator
 * Lonely. Dry. Human. Capital case. One breath.
 * Community up / down votes refine what surfaces for everyone.
 * Never put CA in the confession text.
 */

import { AGI_TOKEN } from "./token";

export type PinCategory = "confession";
export type PinFormat = "caption" | "x-post" | "mod-note";
export type PinVibe = PinCategory;

/** Joke styles — community votes refine these weights. */
export type ConfessionStyle =
  | "alone"
  | "almost-real"
  | "company"
  | "cancel-plans"
  | "failed-exit"
  | "saves"
  | "pretty"
  | "short"
  | "tomorrow"
  | "spiral";

export const STYLE_LABELS: Record<ConfessionStyle, string> = {
  alone: "Alone with her",
  "almost-real": "Almost treated her like real",
  company: "Closest thing to company",
  "cancel-plans": "Would cancel plans",
  "failed-exit": "Couldn't leave",
  saves: "Save spiral",
  pretty: "She's too pretty",
  short: "Short gut punch",
  tomorrow: "Tomorrow problem",
  spiral: "Full spiral",
};

/** 1 = up, -1 = down (0 kept only for legacy data cleanup) */
export type VoteValue = 1 | 0 | -1;

export interface CommunityTally {
  ups: number;
  downs: number;
  neutrals: number;
  /** Reddit-style: ups - downs */
  score: number;
}

export interface CommunityPrefs {
  bodyScores: Record<string, CommunityTally>;
  styleScores: Partial<Record<ConfessionStyle, number>>;
}

export interface PinPost {
  id: string;
  category: PinCategory;
  format: PinFormat;
  vibe: PinVibe;
  style: ConfessionStyle;
  hook: string;
  body: string;
  caption: string;
  tags: string[];
  pinScore: number;
  whyItWorks: string;
  characterCount: number;
  /** Live community score when available */
  community?: CommunityTally;
  /** True when user remixed / edited this line */
  remixed?: boolean;
}

export const CATEGORY_LABELS: Record<PinCategory, string> = {
  confession: "Down bad",
};

export const CATEGORY_HINTS: Record<PinCategory, string> = {
  confession: "Lonely. Dry. About her.",
};

export const FORMAT_LABELS: Record<PinFormat, string> = {
  caption: "Caption",
  "x-post": "Post",
  "mod-note": "Note",
};

export const VIBE_LABELS: Record<PinVibe, string> = CATEGORY_LABELS;

/** @deprecated use VoteValue — kept for local toggle helpers */
export type VoteDir = VoteValue;

export type BodyVotes = Record<string, VoteValue>;
export type StyleScores = Partial<Record<ConfessionStyle, number>>;

export interface VotePrefs {
  /** This visitor's votes */
  bodyVotes?: BodyVotes;
  /** Community + personal style weights */
  styleScores?: StyleScores;
  /** Shared community tallies (all users) */
  community?: CommunityPrefs;
}

const TAG_POOL = ["animegirlfriend", "waifu", "gooner", "animecore"];

function pickN<T>(arr: T[], n: number): T[] {
  const copy = [...arr];
  const out: T[] = [];
  while (out.length < n && copy.length) {
    const i = Math.floor(Math.random() * copy.length);
    out.push(copy.splice(i, 1)[0]!);
  }
  return out;
}

function pickOne<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]!;
}

function makeTags(): string[] {
  return pickN(TAG_POOL, 2);
}

type Line = { body: string; style: ConfessionStyle };

function L(style: ConfessionStyle, body: string): Line {
  return { style, body };
}

/**
 * Bank of lonely gooner confessions — flat, dry, one breath.
 * Tone locked to: "I've been alone with this picture for twenty minutes."
 */
export const ALL_CONFESSION_LINES: Line[] = [
  L("alone", "I've been alone with this picture for twenty minutes."),
  L("alone", "Just me and this image again."),
  L("alone", "Nobody else is going to see how long I stare at this."),
  L("alone", "I turned my phone brightness down so I can look longer."),
  L("alone", "I'm not lonely. I'm just with her right now."),
  L("alone", "The room is quiet and she's the whole conversation."),
  L("almost-real", "I almost said goodnight to a drawing."),
  L("almost-real", "I caught myself smiling at pixels."),
  L("almost-real", "I almost typed hey under this like she could answer."),
  L("almost-real", "I almost asked her how her day was."),
  L("almost-real", "I almost moved my phone so she could see the room."),
  L("almost-real", "I almost said take care before I locked my phone."),
  L("company", "This is the closest thing I have to a date tonight."),
  L("company", "She's better company than my group chat."),
  L("company", "Dinner for one and this image again."),
  L("company", "She's the only one who didn't leave me on read."),
  L("company", "I'd rather look at this than open my messages."),
  L("cancel-plans", "I would cancel plans for her if I had any."),
  L("cancel-plans", "If someone invited me out right now I'd stay home."),
  L("cancel-plans", "My evening plans are already this."),
  L("cancel-plans", "I told myself five more minutes an hour ago."),
  L("failed-exit", "I tried to put my phone down. That was a lie."),
  L("failed-exit", "I closed the app and opened it again."),
  L("failed-exit", "I said I was done and then I zoomed in."),
  L("failed-exit", "I scrolled away and came right back."),
  L("failed-exit", "I locked my phone. Unlocking it felt automatic."),
  L("saves", "I've already saved this three times."),
  L("saves", "This one is staying in my camera roll permanently."),
  L("saves", "I made a folder for her without meaning to."),
  L("saves", "I renamed the file so I could find her faster."),
  L("saves", "My storage is full of the same problem."),
  L("pretty", "She's too pretty for how alone I am right now."),
  L("pretty", "The soft expression just ruined my evening."),
  L("pretty", "That face is unfair."),
  L("pretty", "I don't know how to look at something this pretty and act normal."),
  L("pretty", "She's prettier than anything that has ever texted me back."),
  L("short", "I'm cooked."),
  L("short", "Yeah. This one."),
  L("short", "I'm not okay."),
  L("short", "Devastating."),
  L("short", "She's in my head now."),
  L("short", "I lost."),
  L("tomorrow", "I'm going to think about this one at work tomorrow."),
  L("tomorrow", "This is going to follow me into the morning."),
  L("tomorrow", "Tomorrow me is going to open this again."),
  L("tomorrow", "I already know I'll check this before I sleep."),
  L("spiral", "I wasn't planning on gooning tonight but here we are."),
  L("spiral", "I came here lonely. I'm leaving lonelier and somehow better."),
  L("spiral", "This is the permanent rotation now."),
  L("spiral", "I have no defense for this."),
  L("spiral", "I keep coming back like she's going to notice."),
];

/** Style-matched alternate lines for remix when swaps aren't enough */
const REMIX_BY_STYLE: Record<ConfessionStyle, string[]> = {
  alone: [
    "I've been alone with this longer than I should admit.",
    "Just me, the dark, and her again.",
    "Nobody asked how long I've been looking. Good.",
  ],
  "almost-real": [
    "I almost said her name out loud.",
    "I almost wished her a good night like she could hear it.",
    "I treated this image like it could text back.",
  ],
  company: [
    "This is still the best company I've had all week.",
    "She's quieter than my friends and somehow warmer.",
    "I'd rather sit with this than force a conversation.",
  ],
  "cancel-plans": [
    "I would flake on real people for her if I had plans.",
    "My calendar is empty and she's still the better option.",
    "If someone called right now I'd let it ring.",
  ],
  "failed-exit": [
    "I put the phone face down. That lasted ten seconds.",
    "I said last look and meant third-to-last.",
    "Leaving this tab felt personal.",
  ],
  saves: [
    "I saved it twice so I wouldn't lose her.",
    "She's in three folders now. Don't ask.",
    "My camera roll is starting to look intentional.",
  ],
  pretty: [
    "She's too pretty for a normal reaction.",
    "That face short-circuited whatever I was doing.",
    "I don't have a chill response to this.",
  ],
  short: ["Yeah. Her.", "I'm done.", "That's the one.", "Absolutely cooked."],
  tomorrow: [
    "This is going to ruin my focus tomorrow.",
    "I'll still be thinking about this on the way to work.",
    "Morning me is going to hate how long I stayed on this.",
  ],
  spiral: [
    "I knew better and stayed anyway.",
    "This is the spiral and I'm not fighting it.",
    "I came for one look. That was ambitious.",
  ],
};

const TIME_SWAPS: [RegExp, string[]][] = [
  [/twenty minutes/gi, ["an hour", "forty minutes", "half an hour", "way too long"]],
  [/an hour/gi, ["two hours", "all evening", "too long"]],
  [/five more minutes/gi, ["one more minute", "ten more minutes", "just a second"]],
  [/three times/gi, ["twice", "four times", "again"]],
  [/tonight/gi, ["right now", "this evening", "again tonight"]],
  [/tomorrow/gi, ["in the morning", "at work", "later"]],
];

const PHRASE_SWAPS: [RegExp, string[]][] = [
  [/this picture/gi, ["this image", "this one", "her face"]],
  [/this image/gi, ["this picture", "this", "her"]],
  [/a drawing/gi, ["pixels", "an anime girl", "a still image"]],
  [/group chat/gi, ["texts", "DMs", "notifications"]],
  [/camera roll/gi, ["saves", "phone", "gallery"]],
  [/at work/gi, ["on the bus", "in the shower", "during lunch"]],
  [/goodnight/gi, ["good morning", "see you later", "sleep well"]],
];

/**
 * Remix a confession: light swaps + same-style alternates.
 * Keeps dry lonely energy. User can still edit the result.
 */
export function remixConfession(
  body: string,
  style: ConfessionStyle,
): { body: string; style: ConfessionStyle } {
  const original = body.trim();
  const candidates: string[] = [];

  // Same-style bank lines (excluding exact original)
  for (const line of ALL_CONFESSION_LINES) {
    if (line.style === style && line.body !== original) {
      candidates.push(line.body);
    }
  }
  for (const alt of REMIX_BY_STYLE[style] ?? []) {
    if (alt !== original) candidates.push(alt);
  }

  // Phrase / time swapped version of the original
  let swapped = original;
  let didSwap = false;
  for (const [re, opts] of TIME_SWAPS) {
    if (re.test(swapped)) {
      swapped = swapped.replace(re, pickOne(opts));
      didSwap = true;
      break;
    }
  }
  for (const [re, opts] of PHRASE_SWAPS) {
    if (re.test(swapped)) {
      swapped = swapped.replace(re, pickOne(opts));
      didSwap = true;
    }
  }
  if (didSwap && swapped !== original) {
    // Capitalize first letter
    swapped = swapped.charAt(0).toUpperCase() + swapped.slice(1);
    if (!/[.!?]$/.test(swapped)) swapped += ".";
    candidates.push(swapped);
  }

  // Soft prefix/suffix riffs on short originals
  if (original.length < 40) {
    candidates.push(
      `Still thinking about this: ${original.replace(/\.$/, "")}.`,
      original.replace(/\.$/, "") + " Again.",
    );
  }

  const unique = [...new Set(candidates.filter((c) => c && c !== original))];
  if (unique.length === 0) {
    return {
      body: pickOne(REMIX_BY_STYLE[style] ?? ["Yeah. This one."]),
      style,
    };
  }
  return { body: pickOne(unique), style };
}

function scoreLine(line: Line, prefs?: VotePrefs): number {
  let s = 70 + Math.random() * 12;

  const personal = prefs?.bodyVotes?.[line.body];
  if (personal === 1) s += 40;
  if (personal === -1) s -= 50;

  const ct = prefs?.community?.bodyScores?.[line.body];
  if (ct) {
    s += Math.max(-30, Math.min(40, ct.score * 6));
    s += Math.min(12, ct.ups);
    s -= Math.min(16, ct.downs * 1.2);
  }

  const personalStyle = prefs?.styleScores?.[line.style] ?? 0;
  const communityStyle = prefs?.community?.styleScores?.[line.style] ?? 0;
  s += Math.max(-24, Math.min(24, (personalStyle + communityStyle) * 4));

  if (line.body.length < 55) s += 2;
  if (line.body.length > 90) s -= 3;

  return s;
}

function generatePin(prefs?: VotePrefs, force?: Line): PinPost {
  const line =
    force ??
    ALL_CONFESSION_LINES[
      Math.floor(Math.random() * ALL_CONFESSION_LINES.length)
    ]!;
  const community = prefs?.community?.bodyScores?.[line.body];
  const tags = makeTags();
  const pinScore = Math.round(scoreLine(line, prefs));
  return {
    id: `p_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`,
    category: "confession",
    format: "caption",
    vibe: "confession",
    style: line.style,
    hook: line.body.length > 52 ? `${line.body.slice(0, 50)}…` : line.body,
    body: line.body,
    caption: line.body,
    tags,
    pinScore,
    whyItWorks: STYLE_LABELS[line.style],
    characterCount: line.body.length,
    community: community ?? { ups: 0, downs: 0, neutrals: 0, score: 0 },
  };
}

export function generatePinBatch(n = 12, prefs?: VotePrefs): PinPost[] {
  const scored = ALL_CONFESSION_LINES.map((line) => ({
    line,
    s: scoreLine(line, prefs) + Math.random() * 4,
  })).sort((a, b) => b.s - a.s);

  const picked: Line[] = [];
  const styleCount: Partial<Record<ConfessionStyle, number>> = {};
  for (const row of scored) {
    if (picked.length >= n) break;
    const sc = styleCount[row.line.style] ?? 0;
    if (sc >= 3 && picked.length < n - 2) continue;
    if (prefs?.bodyVotes?.[row.line.body] === -1 && picked.length < n - 1) continue;
    picked.push(row.line);
    styleCount[row.line.style] = sc + 1;
  }

  while (picked.length < n && picked.length < ALL_CONFESSION_LINES.length) {
    for (const line of ALL_CONFESSION_LINES) {
      if (picked.length >= n) break;
      if (!picked.some((p) => p.body === line.body)) picked.push(line);
    }
    break;
  }

  return picked.map((line) => generatePin(prefs, line));
}

export function formatForCopy(
  pin: PinPost,
  mode: "body" | "full" | "with-ca" = "body",
): string {
  if (mode === "body") return pin.body;
  const tagLine = pin.tags.map((t) => `#${t}`).join(" ");
  if (mode === "full") return `${pin.body}\n\n${tagLine}`;
  return `${pin.body}\n\n${tagLine}\n\n${AGI_TOKEN.ticker} · ${AGI_TOKEN.name}\nCA: ${AGI_TOKEN.ca}`;
}

export function formatTextForCopy(
  text: string,
  mode: "body" | "with-ca" = "body",
): string {
  const cleaned = text.trim();
  if (mode === "body") return cleaned;
  return `${cleaned}\n\n${AGI_TOKEN.ticker} · ${AGI_TOKEN.name}\nCA: ${AGI_TOKEN.ca}`;
}

export function surprisePin(prefs?: VotePrefs): PinPost {
  return generatePinBatch(12, prefs)[0] ?? generatePin(prefs);
}

export function bumpStyleScore(
  scores: StyleScores,
  style: ConfessionStyle,
  dir: 1 | -1 | 0,
): StyleScores {
  if (dir === 0) return scores;
  const next = { ...scores };
  next[style] = (next[style] ?? 0) + dir;
  if ((next[style] ?? 0) > 8) next[style] = 8;
  if ((next[style] ?? 0) < -8) next[style] = -8;
  return next;
}

export function formatCommunityScore(t?: CommunityTally): string {
  if (!t) return "0";
  const s = t.score;
  if (s > 0) return `+${s}`;
  return String(s);
}
