import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  type BodyVotes,
  type CommunityPrefs,
  type CommunityTally,
  type ConfessionStyle,
  type PinPost,
  type StyleScores,
  type VoteValue,
  STYLE_LABELS,
  bumpStyleScore,
  generatePinBatch,
  surprisePin,
} from "./pins";

const PIN_BATCH = 14;
const MAX_SAVED = 40;
const VOTER_KEY = "agi-confession-voter-id";

/** New batch | Leaderboard (top upvoted) | Used (posted by others) */
export type FeedTab = "batch" | "top" | "used";

export interface RankedEntry {
  id: string;
  body: string;
  style: ConfessionStyle;
  community: CommunityTally;
  usedCount: number;
  rank: number;
}

function ensureVoterId(): string {
  if (typeof window === "undefined") return "ssr";
  try {
    let id = localStorage.getItem(VOTER_KEY);
    if (!id || id.length < 12) {
      id =
        typeof crypto !== "undefined" && crypto.randomUUID
          ? crypto.randomUUID()
          : `v_${Date.now()}_${Math.random().toString(36).slice(2)}`;
      localStorage.setItem(VOTER_KEY, id);
    }
    return id;
  } catch {
    return `v_tmp_${Date.now()}`;
  }
}

function prefsFrom(get: () => PinState) {
  return {
    bodyVotes: get().bodyVotes,
    styleScores: get().styleScores,
    community: get().community ?? undefined,
  };
}

function emptyTally(): CommunityTally {
  return { ups: 0, downs: 0, neutrals: 0, score: 0 };
}

function attachCommunity(
  pins: PinPost[],
  community: CommunityPrefs | null,
): PinPost[] {
  if (!community) return pins;
  return pins.map((p) => ({
    ...p,
    community: community.bodyScores[p.body] ??
      p.community ??
      emptyTally(),
  }));
}

function mapRanked(
  rows: Array<{
    body: string;
    style: string;
    tally: CommunityTally;
    usedCount: number;
  }>,
): RankedEntry[] {
  return rows.map((r, i) => ({
    id: `r_${i}_${r.body.slice(0, 16)}`,
    body: r.body,
    style: r.style as ConfessionStyle,
    community: r.tally,
    usedCount: r.usedCount,
    rank: i + 1,
  }));
}

function pinFromBody(
  body: string,
  style: ConfessionStyle,
  community: CommunityPrefs | null,
): PinPost {
  const t = community?.bodyScores[body] ?? emptyTally();
  return {
    id: `body_${body.slice(0, 24)}_${style}`,
    category: "confession",
    format: "caption",
    vibe: "confession",
    style,
    hook: body.length > 52 ? `${body.slice(0, 50)}…` : body,
    body,
    caption: body,
    tags: [],
    pinScore: 90 + Math.min(9, t.score),
    whyItWorks: STYLE_LABELS[style],
    characterCount: body.length,
    community: t,
  };
}

interface PinState {
  hydrated: boolean;
  communityReady: boolean;
  voterId: string;
  feedTab: FeedTab;
  pins: PinPost[];
  leaderboard: RankedEntry[];
  usedFeed: RankedEntry[];
  selectedPinId: string | null;
  selectedBody: string | null;
  savedPins: PinPost[];
  usedPinIds: string[];
  bodyVotes: BodyVotes;
  styleScores: StyleScores;
  community: CommunityPrefs | null;
  toast: string | null;

  hydrateFeed: () => void;
  syncCommunity: () => Promise<void>;
  setFeedTab: (tab: FeedTab) => void;
  refreshPins: () => void;
  selectPin: (id: string | null) => void;
  selectBody: (body: string | null) => void;
  surpriseMe: () => void;
  savePin: (id: string) => void;
  saveBody: (body: string, style?: ConfessionStyle) => void;
  unsavePin: (id: string) => void;
  markPinUsed: (id: string) => void;
  markBodyUsed: (body: string, style: ConfessionStyle) => Promise<void>;
  votePin: (id: string, vote: VoteValue) => Promise<void>;
  voteBody: (
    body: string,
    style: ConfessionStyle,
    vote: VoteValue,
  ) => Promise<void>;
  setToast: (msg: string) => void;
  clearToast: () => void;
  clearUsed: () => void;
  resetVotes: () => void;
  resetAll: () => void;
}

export const useGameStore = create<PinState>()(
  persist(
    (set, get) => ({
      hydrated: false,
      communityReady: false,
      voterId: "",
      feedTab: "batch",
      pins: [],
      leaderboard: [],
      usedFeed: [],
      selectedPinId: null,
      selectedBody: null,
      savedPins: [],
      usedPinIds: [],
      bodyVotes: {},
      styleScores: {},
      community: null,
      toast: null,

      hydrateFeed: () => {
        const voterId = ensureVoterId();
        if (get().hydrated && get().pins.length > 0) {
          set({ voterId });
          void get().syncCommunity();
          return;
        }
        const pins = attachCommunity(
          generatePinBatch(PIN_BATCH, prefsFrom(get)),
          null,
        );
        const savedPins = get().savedPins.filter(
          (p) => p.category === "confession" || !p.category,
        );
        set({
          hydrated: true,
          voterId,
          pins,
          selectedPinId: pins[0]?.id ?? null,
          selectedBody: pins[0]?.body ?? null,
          savedPins,
        });
        void get().syncCommunity();
      },

      syncCommunity: async () => {
        const voterId = get().voterId || ensureVoterId();
        try {
          const res = await fetch(
            `/api/confessions?voterId=${encodeURIComponent(voterId)}`,
          );
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const data = (await res.json()) as {
            ok: boolean;
            prefs?: CommunityPrefs;
            myVotes?: BodyVotes;
            leaderboard?: Array<{
              body: string;
              style: string;
              tally: CommunityTally;
              usedCount: number;
            }>;
            used?: Array<{
              body: string;
              style: string;
              tally: CommunityTally;
              usedCount: number;
            }>;
          };
          if (!data.ok || !data.prefs) return;

          const community = data.prefs;
          const bodyVotes = { ...get().bodyVotes, ...(data.myVotes ?? {}) };
          for (const k of Object.keys(bodyVotes)) {
            if (bodyVotes[k] === 0) delete bodyVotes[k];
          }
          const prevBody =
            get().selectedBody ??
            get().pins.find((p) => p.id === get().selectedPinId)?.body;

          const pins = attachCommunity(
            generatePinBatch(PIN_BATCH, {
              bodyVotes,
              styleScores: get().styleScores,
              community,
            }),
            community,
          );

          const leaderboard = data.leaderboard
            ? mapRanked(data.leaderboard)
            : [];
          const usedFeed = data.used ? mapRanked(data.used) : [];

          const nextSelected =
            pins.find((p) => p.body === prevBody)?.id ?? pins[0]?.id ?? null;

          set({
            voterId,
            community,
            bodyVotes,
            communityReady: true,
            pins,
            leaderboard,
            usedFeed,
            selectedPinId: nextSelected,
            selectedBody:
              pins.find((p) => p.id === nextSelected)?.body ??
              prevBody ??
              null,
          });
        } catch (err) {
          console.warn("[community] sync failed, using local ranking", err);
          set({ communityReady: false });
        }
      },

      setFeedTab: (tab) => set({ feedTab: tab }),

      refreshPins: () => {
        const pins = attachCommunity(
          generatePinBatch(PIN_BATCH, prefsFrom(get)),
          get().community,
        );
        set({
          hydrated: true,
          feedTab: "batch",
          pins,
          selectedPinId: pins[0]?.id ?? null,
          selectedBody: pins[0]?.body ?? null,
          toast: get().communityReady
            ? "New batch — ranked by community votes."
            : "New confessions ready.",
        });
        void get().syncCommunity();
      },

      selectPin: (id) => {
        const pin =
          get().pins.find((p) => p.id === id) ??
          get().savedPins.find((p) => p.id === id);
        set({ selectedPinId: id, selectedBody: pin?.body ?? null });
      },

      selectBody: (body) => {
        if (!body) {
          set({ selectedBody: null, selectedPinId: null });
          return;
        }
        const pin =
          get().pins.find((p) => p.body === body) ??
          get().savedPins.find((p) => p.body === body);
        if (pin) {
          set({ selectedPinId: pin.id, selectedBody: body });
        } else {
          set({ selectedBody: body, selectedPinId: null });
        }
      },

      surpriseMe: () => {
        const { pins } = get();
        const pin = surprisePin(prefsFrom(get));
        const withC = attachCommunity([pin], get().community)[0]!;
        const next = [
          withC,
          ...pins.filter((p) => p.body !== withC.body),
        ].slice(0, PIN_BATCH);
        set({
          pins: next,
          selectedPinId: withC.id,
          selectedBody: withC.body,
          hydrated: true,
          feedTab: "batch",
          toast: "Random confession.",
        });
      },

      savePin: (id) => {
        const { pins, savedPins } = get();
        const pin =
          pins.find((p) => p.id === id) ?? savedPins.find((p) => p.id === id);
        if (!pin) return;
        if (savedPins.some((p) => p.id === id || p.body === pin.body)) {
          set({ toast: "Already saved." });
          return;
        }
        set({
          savedPins: [pin, ...savedPins].slice(0, MAX_SAVED),
          toast: "Saved for later.",
        });
      },

      saveBody: (body, style = "spiral") => {
        const existing =
          get().pins.find((p) => p.body === body) ??
          get().savedPins.find((p) => p.body === body);
        if (existing) {
          get().savePin(existing.id);
          return;
        }
        const pin = pinFromBody(body, style, get().community);
        if (get().savedPins.some((p) => p.body === body)) {
          set({ toast: "Already saved." });
          return;
        }
        set({
          savedPins: [pin, ...get().savedPins].slice(0, MAX_SAVED),
          toast: "Saved for later.",
        });
      },

      unsavePin: (id) => {
        set({
          savedPins: get().savedPins.filter((p) => p.id !== id),
          toast: "Removed from saved.",
        });
      },

      markPinUsed: (id) => {
        const pin =
          get().pins.find((p) => p.id === id) ??
          get().savedPins.find((p) => p.id === id);
        if (!pin) return;
        const used = get().usedPinIds;
        if (!used.includes(id)) {
          set({ usedPinIds: [id, ...used].slice(0, 200) });
        }
        void get().markBodyUsed(pin.body, pin.style);
      },

      markBodyUsed: async (body, style) => {
        try {
          const res = await fetch("/api/confessions", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ action: "used", body, style }),
          });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const data = (await res.json()) as {
            ok: boolean;
            usedCount?: number;
            leaderboard?: Array<{
              body: string;
              style: string;
              tally: CommunityTally;
              usedCount: number;
            }>;
            used?: Array<{
              body: string;
              style: string;
              tally: CommunityTally;
              usedCount: number;
            }>;
          };
          if (data.ok) {
            set({
              leaderboard: data.leaderboard
                ? mapRanked(data.leaderboard)
                : get().leaderboard,
              usedFeed: data.used ? mapRanked(data.used) : get().usedFeed,
              toast: "Marked used — now in Used for everyone.",
              feedTab: "used",
            });
          } else {
            set({ toast: "Marked as used." });
          }
        } catch (err) {
          console.warn("[community] used sync failed", err);
          set({ toast: "Marked used on this device." });
        }
      },

      votePin: async (id, vote) => {
        const pin =
          get().pins.find((p) => p.id === id) ??
          get().savedPins.find((p) => p.id === id);
        if (!pin) return;
        if (vote !== 1 && vote !== -1) return;
        await get().voteBody(pin.body, pin.style, vote);
      },

      voteBody: async (body, style, vote) => {
        if (vote !== 1 && vote !== -1) return;
        const { bodyVotes, styleScores, voterId } = get();
        const prev = bodyVotes[body];
        const nextVotes = { ...bodyVotes };
        let toast: string;

        if (prev === vote) {
          delete nextVotes[body];
          toast = "Vote cleared.";
        } else {
          nextVotes[body] = vote;
          toast = vote === 1 ? "Upvoted" : "Downvoted";
        }

        let nextStyles = { ...styleScores };
        if (prev === 1) nextStyles = bumpStyleScore(nextStyles, style, -1);
        if (prev === -1) nextStyles = bumpStyleScore(nextStyles, style, 1);
        if (prev !== vote) {
          if (vote === 1) nextStyles = bumpStyleScore(nextStyles, style, 1);
          if (vote === -1) nextStyles = bumpStyleScore(nextStyles, style, -1);
        }

        const community: CommunityPrefs = get().community
          ? {
              bodyScores: { ...get().community!.bodyScores },
              styleScores: { ...get().community!.styleScores },
            }
          : { bodyScores: {}, styleScores: {} };

        const t: CommunityTally = {
          ...(community.bodyScores[body] ?? emptyTally()),
        };

        const remove = (v: VoteValue | undefined) => {
          if (v === 1) t.ups = Math.max(0, t.ups - 1);
          if (v === -1) t.downs = Math.max(0, t.downs - 1);
        };
        const add = (v: VoteValue | null) => {
          if (v === 1) t.ups += 1;
          if (v === -1) t.downs += 1;
        };

        if (prev === vote) remove(prev);
        else {
          remove(prev);
          add(vote);
        }
        t.score = t.ups - t.downs;
        community.bodyScores[body] = t;

        const patch = (list: PinPost[]) =>
          list.map((p) =>
            p.body === body ? { ...p, community: { ...t } } : p,
          );
        const patchRanked = (list: RankedEntry[]) =>
          list.map((e) =>
            e.body === body ? { ...e, community: { ...t } } : e,
          );

        set({
          bodyVotes: nextVotes,
          styleScores: nextStyles,
          community,
          pins: patch(get().pins),
          savedPins: patch(get().savedPins),
          leaderboard: patchRanked(get().leaderboard),
          usedFeed: patchRanked(get().usedFeed),
          toast,
        });

        try {
          const res = await fetch("/api/confessions", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              voterId: voterId || ensureVoterId(),
              body,
              style,
              vote,
            }),
          });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const data = (await res.json()) as {
            ok: boolean;
            tally?: CommunityTally;
            myVote?: VoteValue | null;
            prefs?: CommunityPrefs;
            leaderboard?: Array<{
              body: string;
              style: string;
              tally: CommunityTally;
              usedCount: number;
            }>;
            used?: Array<{
              body: string;
              style: string;
              tally: CommunityTally;
              usedCount: number;
            }>;
          };
          if (data.ok && data.tally) {
            const bodyVotes2 = { ...get().bodyVotes };
            if (data.myVote === null || data.myVote === undefined) {
              delete bodyVotes2[body];
            } else {
              bodyVotes2[body] = data.myVote;
            }
            const community2 = data.prefs
              ? {
                  bodyScores: { ...data.prefs.bodyScores },
                  styleScores: { ...data.prefs.styleScores },
                }
              : get().community;
            if (community2) {
              community2.bodyScores[body] = data.tally;
            }
            set({
              bodyVotes: bodyVotes2,
              community: community2,
              pins: get().pins.map((p) =>
                p.body === body ? { ...p, community: data.tally } : p,
              ),
              leaderboard: data.leaderboard
                ? mapRanked(data.leaderboard)
                : patchRanked(get().leaderboard).map((e) =>
                    e.body === body ? { ...e, community: data.tally! } : e,
                  ),
              usedFeed: data.used
                ? mapRanked(data.used)
                : patchRanked(get().usedFeed).map((e) =>
                    e.body === body ? { ...e, community: data.tally! } : e,
                  ),
              communityReady: true,
            });
          }
        } catch (err) {
          console.warn("[community] vote sync failed", err);
          set({ toast: "Vote saved on this device — community sync failed." });
        }
      },

      setToast: (msg) => set({ toast: msg }),
      clearToast: () => set({ toast: null }),
      clearUsed: () => set({ usedPinIds: [], toast: "Cleared used marks." }),

      resetVotes: () => {
        const pins = attachCommunity(
          generatePinBatch(PIN_BATCH, {
            bodyVotes: {},
            styleScores: {},
            community: get().community ?? undefined,
          }),
          get().community,
        );
        set({
          bodyVotes: {},
          styleScores: {},
          pins,
          selectedPinId: pins[0]?.id ?? null,
          selectedBody: pins[0]?.body ?? null,
          hydrated: true,
          toast: "Your votes cleared. Community scores still count.",
        });
      },

      resetAll: () => {
        const pins = attachCommunity(
          generatePinBatch(PIN_BATCH, {
            community: get().community ?? undefined,
          }),
          get().community,
        );
        set({
          hydrated: true,
          pins,
          selectedPinId: pins[0]?.id ?? null,
          selectedBody: pins[0]?.body ?? null,
          savedPins: [],
          usedPinIds: [],
          bodyVotes: {},
          styleScores: {},
          toast: "Reset local data.",
        });
        void get().syncCommunity();
      },
    }),
    {
      name: "agi-confession-pins-v6",
      partialize: (s) => ({
        savedPins: s.savedPins,
        usedPinIds: s.usedPinIds,
        styleScores: s.styleScores,
        feedTab: s.feedTab === "batch" || s.feedTab === "top" || s.feedTab === "used"
          ? s.feedTab
          : "batch",
      }),
    },
  ),
);
