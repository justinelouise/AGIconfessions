import { useEffect, useMemo, useState } from "react";
import {
  Bookmark,
  BookmarkCheck,
  Check,
  ChevronDown,
  ChevronUp,
  Copy,
  RefreshCw,
  Shuffle,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CaCopy } from "@/components/game/ca-copy";
import { cn } from "@/lib/utils";
import {
  STYLE_LABELS,
  formatCommunityScore,
  formatTextForCopy,
  remixConfession,
  type ConfessionStyle,
  type PinPost,
  type VoteValue,
} from "@/lib/game/pins";
import {
  type FeedTab,
  type RankedEntry,
  useGameStore,
} from "@/lib/game/store";
import { copyToClipboard } from "@/lib/game/token";

function scoreLabel(score?: number): string {
  if (score === undefined) return "•";
  if (score > 0) return `+${score}`;
  return String(score);
}

function VoteRail({
  body,
  score,
  onVote,
  compact = false,
}: {
  body: string;
  score?: number;
  onVote: (vote: VoteValue) => void;
  compact?: boolean;
}) {
  const vote = useGameStore((s) => s.bodyVotes[body]);

  return (
    <div
      className={cn(
        "flex shrink-0 flex-col items-center gap-0.5 rounded-l-[var(--radius-md)] bg-[var(--color-bg)]/80 py-2",
        compact ? "w-9" : "w-11",
      )}
      role="group"
      aria-label="Vote"
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onVote(1);
        }}
        className={cn(
          "flex size-8 items-center justify-center rounded-[var(--radius-sm)] transition-colors",
          vote === 1
            ? "bg-[var(--color-upvote)]/15 text-[var(--color-upvote)]"
            : "text-[var(--color-muted)] hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-upvote)]",
        )}
        aria-label="Upvote"
        aria-pressed={vote === 1}
        title="Upvote"
      >
        <ChevronUp className="size-5" strokeWidth={2.5} aria-hidden />
      </button>
      <span
        className={cn(
          "min-w-[1.5rem] text-center text-xs font-bold tabular",
          (score ?? 0) > 0
            ? "text-[var(--color-upvote)]"
            : (score ?? 0) < 0
              ? "text-[var(--color-downvote)]"
              : "text-[var(--color-muted)]",
        )}
        title="Score (ups − downs)"
      >
        {scoreLabel(score)}
      </span>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onVote(-1);
        }}
        className={cn(
          "flex size-8 items-center justify-center rounded-[var(--radius-sm)] transition-colors",
          vote === -1
            ? "bg-[var(--color-downvote)]/15 text-[var(--color-downvote)]"
            : "text-[var(--color-muted)] hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-downvote)]",
        )}
        aria-label="Downvote"
        aria-pressed={vote === -1}
        title="Downvote"
      >
        <ChevronDown className="size-5" strokeWidth={2.5} aria-hidden />
      </button>
    </div>
  );
}

function PostCard({
  pin,
  selected,
  used,
  saved,
  onSelect,
  onVote,
}: {
  pin: PinPost;
  selected: boolean;
  used: boolean;
  saved: boolean;
  onSelect: () => void;
  onVote: (vote: VoteValue) => void;
}) {
  return (
    <article
      className={cn(
        "reddit-card flex overflow-hidden transition-colors",
        selected && "border-[var(--color-link)] ring-1 ring-[var(--color-link)]/40",
        used && "opacity-55",
      )}
    >
      <VoteRail body={pin.body} score={pin.community?.score} onVote={onVote} />
      <button
        type="button"
        onClick={onSelect}
        className="min-w-0 flex-1 px-3 py-2.5 text-left hover:bg-[var(--color-surface-hover)]/40"
      >
        <div className="mb-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] text-[var(--color-muted)]">
          <span className="rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-2 py-0.5 text-[10px] font-medium text-fuchsia-300">
            Down bad
          </span>
          <span className="rounded-full bg-[var(--color-bg)] px-1.5 py-px text-[10px] text-[var(--color-flair)]">
            {STYLE_LABELS[pin.style] ?? "confession"}
          </span>
          {saved ? (
            <BookmarkCheck className="size-3 text-[var(--color-pin)]" aria-hidden />
          ) : null}
          {pin.community && pin.community.ups + pin.community.downs > 0 ? (
            <span className="text-[var(--color-subtle)]">
              {pin.community.ups} up · {pin.community.downs} down
            </span>
          ) : null}
        </div>
        <p className="text-[15px] font-medium leading-snug text-[var(--color-fg)]">
          {pin.body}
        </p>
      </button>
    </article>
  );
}

function RankedCard({
  entry,
  selected,
  mode,
  onSelect,
  onVote,
}: {
  entry: RankedEntry;
  selected: boolean;
  mode: "top" | "used";
  onSelect: () => void;
  onVote: (vote: VoteValue) => void;
}) {
  return (
    <article
      className={cn(
        "reddit-card flex overflow-hidden",
        selected && "border-[var(--color-link)] ring-1 ring-[var(--color-link)]/40",
      )}
    >
      <div className="flex w-10 shrink-0 flex-col items-center justify-center border-r border-[var(--color-border)] bg-[var(--color-bg)]/50">
        <span
          className={cn(
            "text-sm font-bold tabular",
            entry.rank <= 3 ? "text-[var(--color-pin)]" : "text-[var(--color-muted)]",
          )}
        >
          {entry.rank}
        </span>
      </div>
      <VoteRail
        body={entry.body}
        score={entry.community.score}
        onVote={onVote}
        compact
      />
      <button
        type="button"
        onClick={onSelect}
        className="min-w-0 flex-1 px-3 py-2.5 text-left hover:bg-[var(--color-surface-hover)]/40"
      >
        <div className="mb-1 flex flex-wrap items-center gap-2 text-[11px] text-[var(--color-muted)]">
          {mode === "used" ? (
            <span className="rounded-full bg-[var(--color-bg)] px-1.5 py-px text-[10px] text-[var(--color-flair)]">
              Used {entry.usedCount}×
            </span>
          ) : (
            <span className="rounded-full bg-[var(--color-bg)] px-1.5 py-px text-[10px] text-[var(--color-flair)]">
              {STYLE_LABELS[entry.style]}
            </span>
          )}
          <span className="font-mono text-[var(--color-upvote)]">
            {formatCommunityScore(entry.community)}
          </span>
          <span className="text-[var(--color-subtle)]">
            {entry.community.ups} up · {entry.community.downs} down
          </span>
        </div>
        <p className="text-[15px] font-medium leading-snug text-[var(--color-fg)]">
          {entry.body}
        </p>
      </button>
    </article>
  );
}

const TABS: {
  id: FeedTab;
  label: string;
  icon: typeof RefreshCw;
}[] = [
  { id: "batch", label: "New batch", icon: RefreshCw },
  { id: "top", label: "Leaderboard", icon: Trophy },
  { id: "used", label: "Used", icon: Users },
];

export function PinFinder() {
  const pins = useGameStore((s) => s.pins);
  const leaderboard = useGameStore((s) => s.leaderboard);
  const usedFeed = useGameStore((s) => s.usedFeed);
  const selectedPinId = useGameStore((s) => s.selectedPinId);
  const selectedBody = useGameStore((s) => s.selectedBody);
  const savedPins = useGameStore((s) => s.savedPins);
  const usedPinIds = useGameStore((s) => s.usedPinIds);
  const bodyVotes = useGameStore((s) => s.bodyVotes);
  const communityReady = useGameStore((s) => s.communityReady);
  const feedTab = useGameStore((s) => s.feedTab);
  const hydrateFeed = useGameStore((s) => s.hydrateFeed);
  const refreshPins = useGameStore((s) => s.refreshPins);
  const setFeedTab = useGameStore((s) => s.setFeedTab);
  const selectPin = useGameStore((s) => s.selectPin);
  const selectBody = useGameStore((s) => s.selectBody);
  const surpriseMe = useGameStore((s) => s.surpriseMe);
  const savePin = useGameStore((s) => s.savePin);
  const saveBody = useGameStore((s) => s.saveBody);
  const unsavePin = useGameStore((s) => s.unsavePin);
  const markPinUsed = useGameStore((s) => s.markPinUsed);
  const markBodyUsed = useGameStore((s) => s.markBodyUsed);
  const votePin = useGameStore((s) => s.votePin);
  const voteBody = useGameStore((s) => s.voteBody);
  const setToast = useGameStore((s) => s.setToast);

  const [copied, setCopied] = useState(false);
  const [ready, setReady] = useState(false);
  const [draft, setDraft] = useState("");
  const [sourceBody, setSourceBody] = useState<string | null>(null);
  const [isRemix, setIsRemix] = useState(false);

  useEffect(() => {
    hydrateFeed();
    setReady(true);
  }, [hydrateFeed]);

  const selected: PinPost | null = useMemo(() => {
    if (selectedPinId) {
      const fromFeed =
        pins.find((p) => p.id === selectedPinId) ??
        savedPins.find((p) => p.id === selectedPinId);
      if (fromFeed) return fromFeed;
    }
    if (selectedBody) {
      const fromBody =
        pins.find((p) => p.body === selectedBody) ??
        savedPins.find((p) => p.body === selectedBody);
      if (fromBody) return fromBody;
      const ranked =
        leaderboard.find((h) => h.body === selectedBody) ??
        usedFeed.find((h) => h.body === selectedBody);
      if (ranked) {
        return {
          id: ranked.id,
          category: "confession" as const,
          format: "caption" as const,
          vibe: "confession" as const,
          style: ranked.style,
          hook: ranked.body,
          body: ranked.body,
          caption: ranked.body,
          tags: [],
          pinScore: 90,
          whyItWorks: STYLE_LABELS[ranked.style],
          characterCount: ranked.body.length,
          community: ranked.community,
        };
      }
    }
    return pins[0] ?? null;
  }, [selectedPinId, selectedBody, pins, savedPins, leaderboard, usedFeed]);

  useEffect(() => {
    if (!selectedBody && pins[0]) {
      selectPin(pins[0].id);
    }
  }, [pins, selectedBody, selectPin]);

  useEffect(() => {
    if (!selected) return;
    if (selected.body !== sourceBody) {
      setDraft(selected.body);
      setSourceBody(selected.body);
      setIsRemix(false);
    }
  }, [selected, sourceBody]);

  const savedIds = useMemo(() => new Set(savedPins.map((p) => p.id)), [savedPins]);
  const savedBodies = useMemo(
    () => new Set(savedPins.map((p) => p.body)),
    [savedPins],
  );
  const usedIds = useMemo(() => new Set(usedPinIds), [usedPinIds]);
  const voteCount = Object.keys(bodyVotes).length;

  const handleCopy = async () => {
    const text = formatTextForCopy(draft || selected?.body || "", "body");
    if (!text) return;
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopied(true);
      setToast(isRemix || draftDirty ? "Your remix copied." : "Confession copied.");
      window.setTimeout(() => setCopied(false), 1600);
    } else {
      setToast("Copy failed — select the text manually.");
    }
  };

  const handleRemix = () => {
    if (!selected) return;
    const result = remixConfession(selected.body, selected.style);
    setDraft(result.body);
    setIsRemix(true);
    setToast("Remixed — edit it, then copy.");
  };

  const handleResetDraft = () => {
    if (!selected) return;
    setDraft(selected.body);
    setIsRemix(false);
    setToast("Back to original.");
  };

  const draftDirty = Boolean(selected && draft.trim() !== selected.body);

  return (
    <div className="flex min-h-[calc(100dvh-var(--grok-banner-h,0px))] flex-col bg-[var(--color-bg)]">
      <div className="relative w-full border-b border-[var(--color-border)] bg-[#1a1410]">
        <img
          src="/assets/agi-banner.jpg"
          alt="Anime Girlfriend Intelligence (AGI)"
          className="mx-auto block h-auto w-full max-h-[min(28vw,220px)] object-cover object-center sm:max-h-[200px] lg:max-h-[220px]"
          width={1920}
          height={400}
        />
      </div>

      <header className="border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-3 px-3 py-3 sm:px-5">
          <div className="min-w-0">
            <h1 className="font-display text-xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-2xl">
              AGI Confessions
            </h1>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)]">
              Ever freeze when you see a pretty anime girl? AGI Confessions gives you the right
              words. Average guy energy. Pure gooner thoughts.
            </p>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)]">
              Upvote and downvote to train the generator. Check the leaderboard for the most
              upvoted lines. Remix any confession to make it yours.
            </p>
            <ol className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[var(--color-subtle)] sm:text-[13px]">
              <li>
                <span className="font-medium text-[var(--color-muted)]">1.</span> Pick a confession
              </li>
              <li>
                <span className="font-medium text-[var(--color-muted)]">2.</span> Vote or remix
              </li>
              <li>
                <span className="font-medium text-[var(--color-muted)]">3.</span> Copy under the image
              </li>
            </ol>
            <p className="mt-2 text-xs text-[var(--color-subtle)]">
              <span className="text-[var(--color-upvote)]">↑</span> /{" "}
              <span className="text-[var(--color-downvote)]">↓</span> train the bank ·{" "}
              <span className="text-[var(--color-pin)]">Leaderboard</span> = most upvoted ·{" "}
              <span className="text-[var(--color-link)]">Used</span> = lines people actually posted.
              {communityReady ? (
                <span className="ml-1 text-emerald-400/80">Community live.</span>
              ) : (
                <span className="ml-1">Syncing…</span>
              )}
              {voteCount > 0 ? (
                <span className="ml-1 text-[var(--color-muted)]">({voteCount} you rated)</span>
              ) : null}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1 border-t border-[var(--color-border)] pt-2.5">
            {TABS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => {
                  if (id === "batch" && feedTab === "batch") {
                    refreshPins();
                    return;
                  }
                  setFeedTab(id);
                }}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors",
                  feedTab === id
                    ? "bg-[var(--color-surface-hover)] text-[var(--color-fg)]"
                    : "text-[var(--color-muted)] hover:bg-[var(--color-surface-hover)]/60 hover:text-[var(--color-fg)]",
                )}
              >
                <Icon className="size-3.5" aria-hidden />
                {label}
                {id === "top" && leaderboard.length > 0 ? (
                  <span className="font-mono text-[10px] text-[var(--color-pin)]">
                    {leaderboard.length}
                  </span>
                ) : null}
                {id === "used" && usedFeed.length > 0 ? (
                  <span className="font-mono text-[10px] text-[var(--color-link)]">
                    {usedFeed.length}
                  </span>
                ) : null}
              </button>
            ))}
            <div className="ml-auto flex flex-wrap gap-1.5">
              <Button size="sm" variant="secondary" onClick={surpriseMe}>
                <Sparkles className="size-3.5" aria-hidden />
                Random
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-[1100px] flex-1 grid-cols-1 gap-3 px-3 py-3 sm:px-5 lg:grid-cols-12">
        <section className="flex min-h-[300px] flex-col gap-2 lg:col-span-7">
          {!ready ? (
            <div className="reddit-card px-4 py-12 text-center text-sm text-[var(--color-muted)]">
              Loading…
            </div>
          ) : feedTab === "top" ? (
            leaderboard.length === 0 ? (
              <div className="reddit-card px-4 py-12 text-center text-sm text-[var(--color-muted)]">
                <Trophy className="mx-auto mb-2 size-8 text-[var(--color-pin)]" aria-hidden />
                No upvoted confessions yet. Hit New batch, upvote winners — they climb here.
              </div>
            ) : (
              <>
                <p className="px-1 text-xs text-[var(--color-muted)]">
                  Most upvoted confessions. Keep voting — scores stay live for everyone.
                </p>
                {leaderboard.map((entry) => (
                  <RankedCard
                    key={entry.body}
                    entry={entry}
                    mode="top"
                    selected={selectedBody === entry.body}
                    onSelect={() => selectBody(entry.body)}
                    onVote={(v) => void voteBody(entry.body, entry.style, v)}
                  />
                ))}
              </>
            )
          ) : feedTab === "used" ? (
            usedFeed.length === 0 ? (
              <div className="reddit-card px-4 py-12 text-center text-sm text-[var(--color-muted)]">
                <Users className="mx-auto mb-2 size-8 text-[var(--color-link)]" aria-hidden />
                Nobody has marked a confession as used yet. Post one, then hit Mark used so others
                can find it.
              </div>
            ) : (
              <>
                <p className="px-1 text-xs text-[var(--color-muted)]">
                  Confessions people have actually used. Still open for upvotes and downvotes.
                </p>
                {usedFeed.map((entry) => (
                  <RankedCard
                    key={entry.body}
                    entry={entry}
                    mode="used"
                    selected={selectedBody === entry.body}
                    onSelect={() => selectBody(entry.body)}
                    onVote={(v) => void voteBody(entry.body, entry.style, v)}
                  />
                ))}
              </>
            )
          ) : pins.length === 0 ? (
            <div className="reddit-card px-4 py-12 text-center text-sm text-[var(--color-muted)]">
              Tap New batch for confessions.
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between gap-2 px-1">
                <p className="text-xs text-[var(--color-muted)]">
                  Fresh batch. Vote to train the generator.
                </p>
                <Button size="sm" variant="ghost" onClick={refreshPins}>
                  <RefreshCw className="size-3.5" aria-hidden />
                  Shuffle batch
                </Button>
              </div>
              {pins.map((pin) => (
                <PostCard
                  key={pin.id}
                  pin={pin}
                  selected={selected?.id === pin.id || selectedBody === pin.body}
                  used={usedIds.has(pin.id)}
                  saved={savedIds.has(pin.id) || savedBodies.has(pin.body)}
                  onSelect={() => selectPin(pin.id)}
                  onVote={(v) => void votePin(pin.id, v)}
                />
              ))}
            </>
          )}
        </section>

        <aside className="lg:col-span-5">
          <div className="reddit-card sticky top-2 flex min-h-[320px] flex-col overflow-hidden lg:max-h-[calc(100dvh-8rem)]">
            {!ready || !selected ? (
              <div className="grid flex-1 place-items-center p-8 text-sm text-[var(--color-muted)]">
                Select a confession
              </div>
            ) : (
              <>
                <div className="flex gap-0 border-b border-[var(--color-border)]">
                  <VoteRail
                    body={selected.body}
                    score={selected.community?.score}
                    onVote={(v) =>
                      void voteBody(
                        selected.body,
                        selected.style as ConfessionStyle,
                        v,
                      )
                    }
                  />
                  <div className="min-w-0 flex-1 p-3">
                    <p className="text-[11px] text-[var(--color-muted)]">
                      <span className="rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-2 py-0.5 text-[10px] font-medium text-fuchsia-300">
                        Down bad
                      </span>{" "}
                      · {STYLE_LABELS[selected.style]}
                      {isRemix || draftDirty ? (
                        <span className="ml-1 text-[var(--color-pin)]">· remix</span>
                      ) : null}
                    </p>
                    {selected.community ? (
                      <p className="mt-1.5 text-[11px] text-[var(--color-subtle)]">
                        {formatCommunityScore(selected.community)} · {selected.community.ups} up ·{" "}
                        {selected.community.downs} down
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="flex flex-1 flex-col overflow-y-auto p-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[10px] font-medium uppercase tracking-wider text-[var(--color-subtle)]">
                        {isRemix || draftDirty ? "Your remix" : "Your confession"}
                      </p>
                      <div className="flex gap-1">
                        <Button size="sm" variant="secondary" onClick={handleRemix}>
                          <Shuffle className="size-3.5" aria-hidden />
                          Remix
                        </Button>
                        {(isRemix || draftDirty) && (
                          <Button size="sm" variant="ghost" onClick={handleResetDraft}>
                            Reset
                          </Button>
                        )}
                      </div>
                    </div>
                    <textarea
                      value={draft}
                      onChange={(e) => {
                        setDraft(e.target.value);
                        setIsRemix(true);
                      }}
                      rows={3}
                      maxLength={280}
                      className="w-full resize-y rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2.5 text-base font-medium leading-snug text-[var(--color-fg)] placeholder:text-[var(--color-subtle)] focus:border-[var(--color-link)] focus:outline-none"
                      aria-label="Confession draft"
                    />
                    <p className="text-[10px] text-[var(--color-subtle)]">
                      Edit or Remix, then copy.{" "}
                      <span className="font-mono tabular">{draft.length}/280</span>
                    </p>

                    <div className="flex flex-col gap-2 pt-1">
                      <Button className="w-full" onClick={() => void handleCopy()}>
                        {copied ? (
                          <Check className="size-3.5" aria-hidden />
                        ) : (
                          <Copy className="size-3.5" aria-hidden />
                        )}
                        {isRemix || draftDirty ? "Copy remix" : "Copy confession"}
                      </Button>
                      <div className="flex flex-wrap gap-2">
                        {savedBodies.has(selected.body) || savedIds.has(selected.id) ? (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              const p = savedPins.find((x) => x.body === selected.body);
                              if (p) unsavePin(p.id);
                            }}
                          >
                            <BookmarkCheck className="size-3.5" aria-hidden />
                            Unsave
                          </Button>
                        ) : (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              if (selectedPinId && pins.some((p) => p.id === selected.id)) {
                                savePin(selected.id);
                              } else {
                                saveBody(selected.body, selected.style);
                              }
                            }}
                          >
                            <Bookmark className="size-3.5" aria-hidden />
                            Save
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            if (selectedPinId && pins.some((p) => p.id === selected.id)) {
                              markPinUsed(selected.id);
                            } else {
                              void markBodyUsed(selected.body, selected.style);
                            }
                          }}
                        >
                          <Check className="size-3.5" aria-hidden />
                          Mark used
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </aside>
      </div>

      <CaCopy variant="footer" onCopied={setToast} className="mt-auto" />
    </div>
  );
}
