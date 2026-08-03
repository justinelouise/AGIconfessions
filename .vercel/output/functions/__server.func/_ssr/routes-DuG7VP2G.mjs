import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { M as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cn, t as Button } from "./button-BxGn7jDk.mjs";
import { a as copyToClipboard, c as formatTextForCopy, d as surprisePin, i as bumpStyleScore, l as generatePinBatch, o as formatCaBlock, r as STYLE_LABELS, s as formatCommunityScore, t as AGI_TOKEN, u as remixConfession } from "./pins-E4OOG7Rb.mjs";
import { a as Shuffle, c as ChevronUp, d as Bookmark, f as BookmarkCheck, i as Sparkles, l as ChevronDown, n as Trophy, o as RefreshCw, s as Copy, t as Users, u as Check } from "../_libs/lucide-react.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DuG7VP2G.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CaCopy({ variant = "bar", onCopied, className }) {
	const [copied, setCopied] = (0, import_react.useState)(null);
	const flash = (kind, msg) => {
		setCopied(kind);
		onCopied?.(msg);
		window.setTimeout(() => setCopied(null), 1600);
	};
	const copyCa = async () => {
		if (await copyToClipboard(AGI_TOKEN.ca)) flash("ca", "CA copied.");
		else onCopied?.("Copy failed — select the CA manually.");
	};
	const copyBlock = async () => {
		if (await copyToClipboard(formatCaBlock())) flash("block", "Ticker + CA copied.");
		else onCopied?.("Copy failed — select the CA manually.");
	};
	if (variant === "footer") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: cn("px-3 pb-4 pt-1 sm:px-5", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1100px]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3 py-2.5 sm:px-3.5 sm:py-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold text-[var(--color-fg)] sm:text-[13px]",
							children: "Support our Project on Solana"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-0.5 text-[10px] text-[var(--color-subtle)]",
							children: [
								AGI_TOKEN.ticker,
								" · ",
								AGI_TOKEN.name
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: copyCa,
						className: cn("flex min-w-0 items-center gap-2 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg)] px-2.5 py-1.5 text-left transition-colors", "hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-hover)]", "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-link)]"),
						title: "Copy CA",
						"aria-label": "Copy contract address",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 flex-1 truncate font-mono text-[11px] leading-none text-[var(--color-fg)] sm:text-xs",
							children: AGI_TOKEN.ca
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex shrink-0 items-center gap-1 text-[11px] font-medium text-[var(--color-muted)]",
							children: copied === "ca" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "size-3.5 text-emerald-400",
								"aria-hidden": true
							}), "Copied"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
								className: "size-3.5",
								"aria-hidden": true
							}), "Copy"] })
						})]
					})]
				})
			})
		})
	});
	if (variant === "compact") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: copyCa,
		className: cn("inline-flex max-w-full items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 text-left font-mono text-[10px] text-[var(--color-muted)] transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]", className),
		title: "Copy $AGI CA",
		children: [
			copied === "ca" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
				className: "size-3 shrink-0 text-[var(--color-karma)]",
				"aria-hidden": true
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				className: "size-3 shrink-0",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[var(--color-accent-dim)]",
				children: AGI_TOKEN.ticker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "truncate",
				children: AGI_TOKEN.ca
			})
		]
	});
	if (variant === "card") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-3", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap items-start justify-between gap-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-sm font-semibold tracking-tight",
					children: [
						AGI_TOKEN.ticker,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-sans text-xs font-normal text-[var(--color-muted)]",
							children: AGI_TOKEN.name
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 break-all font-mono text-[11px] leading-relaxed text-[var(--color-fg)]",
					children: AGI_TOKEN.ca
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				size: "sm",
				onClick: copyCa,
				children: [copied === "ca" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					className: "size-3.5",
					"aria-hidden": true
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
					className: "size-3.5",
					"aria-hidden": true
				}), "Copy CA"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				size: "sm",
				variant: "secondary",
				onClick: copyBlock,
				children: [copied === "block" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					className: "size-3.5",
					"aria-hidden": true
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
					className: "size-3.5",
					"aria-hidden": true
				}), "Copy ticker + CA"]
			})]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col gap-2 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)]/90 px-3 py-2 sm:flex-row sm:items-center sm:gap-3", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[10px] font-medium uppercase tracking-wider text-[var(--color-subtle)]",
				children: [
					AGI_TOKEN.ticker,
					" · ",
					AGI_TOKEN.name
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 truncate font-mono text-xs text-[var(--color-fg)] sm:text-[13px]",
				children: AGI_TOKEN.ca
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex shrink-0 gap-1.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				size: "sm",
				onClick: copyCa,
				children: [copied === "ca" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					className: "size-3.5",
					"aria-hidden": true
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
					className: "size-3.5",
					"aria-hidden": true
				}), "Copy CA"]
			})
		})]
	});
}
var PIN_BATCH = 14;
var MAX_SAVED = 40;
var VOTER_KEY = "agi-confession-voter-id";
function ensureVoterId() {
	if (typeof window === "undefined") return "ssr";
	try {
		let id = localStorage.getItem(VOTER_KEY);
		if (!id || id.length < 12) {
			id = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `v_${Date.now()}_${Math.random().toString(36).slice(2)}`;
			localStorage.setItem(VOTER_KEY, id);
		}
		return id;
	} catch {
		return `v_tmp_${Date.now()}`;
	}
}
function prefsFrom(get) {
	return {
		bodyVotes: get().bodyVotes,
		styleScores: get().styleScores,
		community: get().community ?? void 0
	};
}
function emptyTally() {
	return {
		ups: 0,
		downs: 0,
		neutrals: 0,
		score: 0
	};
}
function attachCommunity(pins, community) {
	if (!community) return pins;
	return pins.map((p) => ({
		...p,
		community: community.bodyScores[p.body] ?? p.community ?? emptyTally()
	}));
}
function mapRanked(rows) {
	return rows.map((r, i) => ({
		id: `r_${i}_${r.body.slice(0, 16)}`,
		body: r.body,
		style: r.style,
		community: r.tally,
		usedCount: r.usedCount,
		rank: i + 1
	}));
}
function pinFromBody(body, style, community) {
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
		community: t
	};
}
var useGameStore = create()(persist((set, get) => ({
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
			get().syncCommunity();
			return;
		}
		const pins = attachCommunity(generatePinBatch(PIN_BATCH, prefsFrom(get)), null);
		const savedPins = get().savedPins.filter((p) => p.category === "confession" || !p.category);
		set({
			hydrated: true,
			voterId,
			pins,
			selectedPinId: pins[0]?.id ?? null,
			selectedBody: pins[0]?.body ?? null,
			savedPins
		});
		get().syncCommunity();
	},
	syncCommunity: async () => {
		const voterId = get().voterId || ensureVoterId();
		try {
			const res = await fetch(`/api/confessions?voterId=${encodeURIComponent(voterId)}`);
			if (!res.ok) throw new Error(`HTTP ${res.status}`);
			const data = await res.json();
			if (!data.ok || !data.prefs) return;
			const community = data.prefs;
			const bodyVotes = {
				...get().bodyVotes,
				...data.myVotes ?? {}
			};
			for (const k of Object.keys(bodyVotes)) if (bodyVotes[k] === 0) delete bodyVotes[k];
			const prevBody = get().selectedBody ?? get().pins.find((p) => p.id === get().selectedPinId)?.body;
			const pins = attachCommunity(generatePinBatch(PIN_BATCH, {
				bodyVotes,
				styleScores: get().styleScores,
				community
			}), community);
			const leaderboard = data.leaderboard ? mapRanked(data.leaderboard) : [];
			const usedFeed = data.used ? mapRanked(data.used) : [];
			const nextSelected = pins.find((p) => p.body === prevBody)?.id ?? pins[0]?.id ?? null;
			set({
				voterId,
				community,
				bodyVotes,
				communityReady: true,
				pins,
				leaderboard,
				usedFeed,
				selectedPinId: nextSelected,
				selectedBody: pins.find((p) => p.id === nextSelected)?.body ?? prevBody ?? null
			});
		} catch (err) {
			console.warn("[community] sync failed, using local ranking", err);
			set({ communityReady: false });
		}
	},
	setFeedTab: (tab) => set({ feedTab: tab }),
	refreshPins: () => {
		const pins = attachCommunity(generatePinBatch(PIN_BATCH, prefsFrom(get)), get().community);
		set({
			hydrated: true,
			feedTab: "batch",
			pins,
			selectedPinId: pins[0]?.id ?? null,
			selectedBody: pins[0]?.body ?? null,
			toast: get().communityReady ? "New batch — ranked by community votes." : "New confessions ready."
		});
		get().syncCommunity();
	},
	selectPin: (id) => {
		set({
			selectedPinId: id,
			selectedBody: (get().pins.find((p) => p.id === id) ?? get().savedPins.find((p) => p.id === id))?.body ?? null
		});
	},
	selectBody: (body) => {
		if (!body) {
			set({
				selectedBody: null,
				selectedPinId: null
			});
			return;
		}
		const pin = get().pins.find((p) => p.body === body) ?? get().savedPins.find((p) => p.body === body);
		if (pin) set({
			selectedPinId: pin.id,
			selectedBody: body
		});
		else set({
			selectedBody: body,
			selectedPinId: null
		});
	},
	surpriseMe: () => {
		const { pins } = get();
		const withC = attachCommunity([surprisePin(prefsFrom(get))], get().community)[0];
		set({
			pins: [withC, ...pins.filter((p) => p.body !== withC.body)].slice(0, PIN_BATCH),
			selectedPinId: withC.id,
			selectedBody: withC.body,
			hydrated: true,
			feedTab: "batch",
			toast: "Random confession."
		});
	},
	savePin: (id) => {
		const { pins, savedPins } = get();
		const pin = pins.find((p) => p.id === id) ?? savedPins.find((p) => p.id === id);
		if (!pin) return;
		if (savedPins.some((p) => p.id === id || p.body === pin.body)) {
			set({ toast: "Already saved." });
			return;
		}
		set({
			savedPins: [pin, ...savedPins].slice(0, MAX_SAVED),
			toast: "Saved for later."
		});
	},
	saveBody: (body, style = "spiral") => {
		const existing = get().pins.find((p) => p.body === body) ?? get().savedPins.find((p) => p.body === body);
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
			toast: "Saved for later."
		});
	},
	unsavePin: (id) => {
		set({
			savedPins: get().savedPins.filter((p) => p.id !== id),
			toast: "Removed from saved."
		});
	},
	markPinUsed: (id) => {
		const pin = get().pins.find((p) => p.id === id) ?? get().savedPins.find((p) => p.id === id);
		if (!pin) return;
		const used = get().usedPinIds;
		if (!used.includes(id)) set({ usedPinIds: [id, ...used].slice(0, 200) });
		get().markBodyUsed(pin.body, pin.style);
	},
	markBodyUsed: async (body, style) => {
		try {
			const res = await fetch("/api/confessions", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					action: "used",
					body,
					style
				})
			});
			if (!res.ok) throw new Error(`HTTP ${res.status}`);
			const data = await res.json();
			if (data.ok) set({
				leaderboard: data.leaderboard ? mapRanked(data.leaderboard) : get().leaderboard,
				usedFeed: data.used ? mapRanked(data.used) : get().usedFeed,
				toast: "Marked used — now in Used for everyone.",
				feedTab: "used"
			});
			else set({ toast: "Marked as used." });
		} catch (err) {
			console.warn("[community] used sync failed", err);
			set({ toast: "Marked used on this device." });
		}
	},
	votePin: async (id, vote) => {
		const pin = get().pins.find((p) => p.id === id) ?? get().savedPins.find((p) => p.id === id);
		if (!pin) return;
		if (vote !== 1 && vote !== -1) return;
		await get().voteBody(pin.body, pin.style, vote);
	},
	voteBody: async (body, style, vote) => {
		if (vote !== 1 && vote !== -1) return;
		const { bodyVotes, styleScores, voterId } = get();
		const prev = bodyVotes[body];
		const nextVotes = { ...bodyVotes };
		let toast;
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
		const community = get().community ? {
			bodyScores: { ...get().community.bodyScores },
			styleScores: { ...get().community.styleScores }
		} : {
			bodyScores: {},
			styleScores: {}
		};
		const t = { ...community.bodyScores[body] ?? emptyTally() };
		const remove = (v) => {
			if (v === 1) t.ups = Math.max(0, t.ups - 1);
			if (v === -1) t.downs = Math.max(0, t.downs - 1);
		};
		const add = (v) => {
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
		const patch = (list) => list.map((p) => p.body === body ? {
			...p,
			community: { ...t }
		} : p);
		const patchRanked = (list) => list.map((e) => e.body === body ? {
			...e,
			community: { ...t }
		} : e);
		set({
			bodyVotes: nextVotes,
			styleScores: nextStyles,
			community,
			pins: patch(get().pins),
			savedPins: patch(get().savedPins),
			leaderboard: patchRanked(get().leaderboard),
			usedFeed: patchRanked(get().usedFeed),
			toast
		});
		try {
			const res = await fetch("/api/confessions", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					voterId: voterId || ensureVoterId(),
					body,
					style,
					vote
				})
			});
			if (!res.ok) throw new Error(`HTTP ${res.status}`);
			const data = await res.json();
			if (data.ok && data.tally) {
				const bodyVotes2 = { ...get().bodyVotes };
				if (data.myVote === null || data.myVote === void 0) delete bodyVotes2[body];
				else bodyVotes2[body] = data.myVote;
				const community2 = data.prefs ? {
					bodyScores: { ...data.prefs.bodyScores },
					styleScores: { ...data.prefs.styleScores }
				} : get().community;
				if (community2) community2.bodyScores[body] = data.tally;
				set({
					bodyVotes: bodyVotes2,
					community: community2,
					pins: get().pins.map((p) => p.body === body ? {
						...p,
						community: data.tally
					} : p),
					leaderboard: data.leaderboard ? mapRanked(data.leaderboard) : patchRanked(get().leaderboard).map((e) => e.body === body ? {
						...e,
						community: data.tally
					} : e),
					usedFeed: data.used ? mapRanked(data.used) : patchRanked(get().usedFeed).map((e) => e.body === body ? {
						...e,
						community: data.tally
					} : e),
					communityReady: true
				});
			}
		} catch (err) {
			console.warn("[community] vote sync failed", err);
			set({ toast: "Vote saved on this device — community sync failed." });
		}
	},
	setToast: (msg) => set({ toast: msg }),
	clearToast: () => set({ toast: null }),
	clearUsed: () => set({
		usedPinIds: [],
		toast: "Cleared used marks."
	}),
	resetVotes: () => {
		const pins = attachCommunity(generatePinBatch(PIN_BATCH, {
			bodyVotes: {},
			styleScores: {},
			community: get().community ?? void 0
		}), get().community);
		set({
			bodyVotes: {},
			styleScores: {},
			pins,
			selectedPinId: pins[0]?.id ?? null,
			selectedBody: pins[0]?.body ?? null,
			hydrated: true,
			toast: "Your votes cleared. Community scores still count."
		});
	},
	resetAll: () => {
		const pins = attachCommunity(generatePinBatch(PIN_BATCH, { community: get().community ?? void 0 }), get().community);
		set({
			hydrated: true,
			pins,
			selectedPinId: pins[0]?.id ?? null,
			selectedBody: pins[0]?.body ?? null,
			savedPins: [],
			usedPinIds: [],
			bodyVotes: {},
			styleScores: {},
			toast: "Reset local data."
		});
		get().syncCommunity();
	}
}), {
	name: "agi-confession-pins-v6",
	partialize: (s) => ({
		savedPins: s.savedPins,
		usedPinIds: s.usedPinIds,
		styleScores: s.styleScores,
		feedTab: s.feedTab === "batch" || s.feedTab === "top" || s.feedTab === "used" ? s.feedTab : "batch"
	})
}));
function scoreLabel(score) {
	if (score === void 0) return "•";
	if (score > 0) return `+${score}`;
	return String(score);
}
function VoteRail({ body, score, onVote, compact = false }) {
	const vote = useGameStore((s) => s.bodyVotes[body]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex shrink-0 flex-col items-center gap-0.5 rounded-l-[var(--radius-md)] bg-[var(--color-bg)]/80 py-2", compact ? "w-9" : "w-11"),
		role: "group",
		"aria-label": "Vote",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: (e) => {
					e.stopPropagation();
					onVote(1);
				},
				className: cn("flex size-8 items-center justify-center rounded-[var(--radius-sm)] transition-colors", vote === 1 ? "bg-[var(--color-upvote)]/15 text-[var(--color-upvote)]" : "text-[var(--color-muted)] hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-upvote)]"),
				"aria-label": "Upvote",
				"aria-pressed": vote === 1,
				title: "Upvote",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, {
					className: "size-5",
					strokeWidth: 2.5,
					"aria-hidden": true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("min-w-[1.5rem] text-center text-xs font-bold tabular", (score ?? 0) > 0 ? "text-[var(--color-upvote)]" : (score ?? 0) < 0 ? "text-[var(--color-downvote)]" : "text-[var(--color-muted)]"),
				title: "Score (ups − downs)",
				children: scoreLabel(score)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: (e) => {
					e.stopPropagation();
					onVote(-1);
				},
				className: cn("flex size-8 items-center justify-center rounded-[var(--radius-sm)] transition-colors", vote === -1 ? "bg-[var(--color-downvote)]/15 text-[var(--color-downvote)]" : "text-[var(--color-muted)] hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-downvote)]"),
				"aria-label": "Downvote",
				"aria-pressed": vote === -1,
				title: "Downvote",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					className: "size-5",
					strokeWidth: 2.5,
					"aria-hidden": true
				})
			})
		]
	});
}
function PostCard({ pin, selected, used, saved, onSelect, onVote }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("reddit-card flex overflow-hidden transition-colors", selected && "border-[var(--color-link)] ring-1 ring-[var(--color-link)]/40", used && "opacity-55"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoteRail, {
			body: pin.body,
			score: pin.community?.score,
			onVote
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: onSelect,
			className: "min-w-0 flex-1 px-3 py-2.5 text-left hover:bg-[var(--color-surface-hover)]/40",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] text-[var(--color-muted)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-2 py-0.5 text-[10px] font-medium text-fuchsia-300",
						children: "Down bad"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-[var(--color-bg)] px-1.5 py-px text-[10px] text-[var(--color-flair)]",
						children: STYLE_LABELS[pin.style] ?? "confession"
					}),
					saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookmarkCheck, {
						className: "size-3 text-[var(--color-pin)]",
						"aria-hidden": true
					}) : null,
					pin.community && pin.community.ups + pin.community.downs > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[var(--color-subtle)]",
						children: [
							pin.community.ups,
							" up · ",
							pin.community.downs,
							" down"
						]
					}) : null
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[15px] font-medium leading-snug text-[var(--color-fg)]",
				children: pin.body
			})]
		})]
	});
}
function RankedCard({ entry, selected, mode, onSelect, onVote }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("reddit-card flex overflow-hidden", selected && "border-[var(--color-link)] ring-1 ring-[var(--color-link)]/40"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex w-10 shrink-0 flex-col items-center justify-center border-r border-[var(--color-border)] bg-[var(--color-bg)]/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("text-sm font-bold tabular", entry.rank <= 3 ? "text-[var(--color-pin)]" : "text-[var(--color-muted)]"),
					children: entry.rank
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoteRail, {
				body: entry.body,
				score: entry.community.score,
				onVote,
				compact: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onSelect,
				className: "min-w-0 flex-1 px-3 py-2.5 text-left hover:bg-[var(--color-surface-hover)]/40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1 flex flex-wrap items-center gap-2 text-[11px] text-[var(--color-muted)]",
					children: [
						mode === "used" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full bg-[var(--color-bg)] px-1.5 py-px text-[10px] text-[var(--color-flair)]",
							children: [
								"Used ",
								entry.usedCount,
								"×"
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-[var(--color-bg)] px-1.5 py-px text-[10px] text-[var(--color-flair)]",
							children: STYLE_LABELS[entry.style]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[var(--color-upvote)]",
							children: formatCommunityScore(entry.community)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[var(--color-subtle)]",
							children: [
								entry.community.ups,
								" up · ",
								entry.community.downs,
								" down"
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[15px] font-medium leading-snug text-[var(--color-fg)]",
					children: entry.body
				})]
			})
		]
	});
}
var TABS = [
	{
		id: "batch",
		label: "New batch",
		icon: RefreshCw
	},
	{
		id: "top",
		label: "Leaderboard",
		icon: Trophy
	},
	{
		id: "used",
		label: "Used",
		icon: Users
	}
];
function PinFinder() {
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
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [draft, setDraft] = (0, import_react.useState)("");
	const [sourceBody, setSourceBody] = (0, import_react.useState)(null);
	const [isRemix, setIsRemix] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		hydrateFeed();
		setReady(true);
	}, [hydrateFeed]);
	const selected = (0, import_react.useMemo)(() => {
		if (selectedPinId) {
			const fromFeed = pins.find((p) => p.id === selectedPinId) ?? savedPins.find((p) => p.id === selectedPinId);
			if (fromFeed) return fromFeed;
		}
		if (selectedBody) {
			const fromBody = pins.find((p) => p.body === selectedBody) ?? savedPins.find((p) => p.body === selectedBody);
			if (fromBody) return fromBody;
			const ranked = leaderboard.find((h) => h.body === selectedBody) ?? usedFeed.find((h) => h.body === selectedBody);
			if (ranked) return {
				id: ranked.id,
				category: "confession",
				format: "caption",
				vibe: "confession",
				style: ranked.style,
				hook: ranked.body,
				body: ranked.body,
				caption: ranked.body,
				tags: [],
				pinScore: 90,
				whyItWorks: STYLE_LABELS[ranked.style],
				characterCount: ranked.body.length,
				community: ranked.community
			};
		}
		return pins[0] ?? null;
	}, [
		selectedPinId,
		selectedBody,
		pins,
		savedPins,
		leaderboard,
		usedFeed
	]);
	(0, import_react.useEffect)(() => {
		if (!selectedBody && pins[0]) selectPin(pins[0].id);
	}, [
		pins,
		selectedBody,
		selectPin
	]);
	(0, import_react.useEffect)(() => {
		if (!selected) return;
		if (selected.body !== sourceBody) {
			setDraft(selected.body);
			setSourceBody(selected.body);
			setIsRemix(false);
		}
	}, [selected, sourceBody]);
	const savedIds = (0, import_react.useMemo)(() => new Set(savedPins.map((p) => p.id)), [savedPins]);
	const savedBodies = (0, import_react.useMemo)(() => new Set(savedPins.map((p) => p.body)), [savedPins]);
	const usedIds = (0, import_react.useMemo)(() => new Set(usedPinIds), [usedPinIds]);
	const voteCount = Object.keys(bodyVotes).length;
	const handleCopy = async () => {
		const text = formatTextForCopy(draft || selected?.body || "", "body");
		if (!text) return;
		if (await copyToClipboard(text)) {
			setCopied(true);
			setToast(isRemix || draftDirty ? "Your remix copied." : "Confession copied.");
			window.setTimeout(() => setCopied(false), 1600);
		} else setToast("Copy failed — select the text manually.");
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-[calc(100dvh-var(--grok-banner-h,0px))] flex-col bg-[var(--color-bg)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative w-full border-b border-[var(--color-border)] bg-[#1a1410]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/assets/agi-banner.jpg",
					alt: "Anime Girlfriend Intelligence (AGI)",
					className: "mx-auto block h-auto w-full max-h-[min(28vw,220px)] object-cover object-center sm:max-h-[200px] lg:max-h-[220px]",
					width: 1920,
					height: 400
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)]/95 backdrop-blur-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-[1100px] flex-col gap-3 px-3 py-3 sm:px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-2xl",
								children: "AGI Confessions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)]",
								children: "Ever freeze when you see a pretty anime girl? AGI Confessions gives you the right words. Average guy energy. Pure gooner thoughts."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)]",
								children: "Upvote and downvote to train the generator. Check the leaderboard for the most upvoted lines. Remix any confession to make it yours."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
								className: "mt-2.5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[var(--color-subtle)] sm:text-[13px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-[var(--color-muted)]",
										children: "1."
									}), " Pick a confession"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-[var(--color-muted)]",
										children: "2."
									}), " Vote or remix"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-[var(--color-muted)]",
										children: "3."
									}), " Copy under the image"] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-xs text-[var(--color-subtle)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[var(--color-upvote)]",
										children: "↑"
									}),
									" /",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[var(--color-downvote)]",
										children: "↓"
									}),
									" train the bank ·",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[var(--color-pin)]",
										children: "Leaderboard"
									}),
									" = most upvoted ·",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[var(--color-link)]",
										children: "Used"
									}),
									" = lines people actually posted.",
									communityReady ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-1 text-emerald-400/80",
										children: "Community live."
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-1",
										children: "Syncing…"
									}),
									voteCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "ml-1 text-[var(--color-muted)]",
										children: [
											"(",
											voteCount,
											" you rated)"
										]
									}) : null
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-1 border-t border-[var(--color-border)] pt-2.5",
						children: [TABS.map(({ id, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								if (id === "batch" && feedTab === "batch") {
									refreshPins();
									return;
								}
								setFeedTab(id);
							},
							className: cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors", feedTab === id ? "bg-[var(--color-surface-hover)] text-[var(--color-fg)]" : "text-[var(--color-muted)] hover:bg-[var(--color-surface-hover)]/60 hover:text-[var(--color-fg)]"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-3.5",
									"aria-hidden": true
								}),
								label,
								id === "top" && leaderboard.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] text-[var(--color-pin)]",
									children: leaderboard.length
								}) : null,
								id === "used" && usedFeed.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] text-[var(--color-link)]",
									children: usedFeed.length
								}) : null
							]
						}, id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ml-auto flex flex-wrap gap-1.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "secondary",
								onClick: surpriseMe,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
									className: "size-3.5",
									"aria-hidden": true
								}), "Random"]
							})
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid w-full max-w-[1100px] flex-1 grid-cols-1 gap-3 px-3 py-3 sm:px-5 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "flex min-h-[300px] flex-col gap-2 lg:col-span-7",
					children: !ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "reddit-card px-4 py-12 text-center text-sm text-[var(--color-muted)]",
						children: "Loading…"
					}) : feedTab === "top" ? leaderboard.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reddit-card px-4 py-12 text-center text-sm text-[var(--color-muted)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, {
							className: "mx-auto mb-2 size-8 text-[var(--color-pin)]",
							"aria-hidden": true
						}), "No upvoted confessions yet. Hit New batch, upvote winners — they climb here."]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-1 text-xs text-[var(--color-muted)]",
						children: "Most upvoted confessions. Keep voting — scores stay live for everyone."
					}), leaderboard.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RankedCard, {
						entry,
						mode: "top",
						selected: selectedBody === entry.body,
						onSelect: () => selectBody(entry.body),
						onVote: (v) => void voteBody(entry.body, entry.style, v)
					}, entry.body))] }) : feedTab === "used" ? usedFeed.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reddit-card px-4 py-12 text-center text-sm text-[var(--color-muted)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
							className: "mx-auto mb-2 size-8 text-[var(--color-link)]",
							"aria-hidden": true
						}), "Nobody has marked a confession as used yet. Post one, then hit Mark used so others can find it."]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-1 text-xs text-[var(--color-muted)]",
						children: "Confessions people have actually used. Still open for upvotes and downvotes."
					}), usedFeed.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RankedCard, {
						entry,
						mode: "used",
						selected: selectedBody === entry.body,
						onSelect: () => selectBody(entry.body),
						onVote: (v) => void voteBody(entry.body, entry.style, v)
					}, entry.body))] }) : pins.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "reddit-card px-4 py-12 text-center text-sm text-[var(--color-muted)]",
						children: "Tap New batch for confessions."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2 px-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-[var(--color-muted)]",
							children: "Fresh batch. Vote to train the generator."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "ghost",
							onClick: refreshPins,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
								className: "size-3.5",
								"aria-hidden": true
							}), "Shuffle batch"]
						})]
					}), pins.map((pin) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostCard, {
						pin,
						selected: selected?.id === pin.id || selectedBody === pin.body,
						used: usedIds.has(pin.id),
						saved: savedIds.has(pin.id) || savedBodies.has(pin.body),
						onSelect: () => selectPin(pin.id),
						onVote: (v) => void votePin(pin.id, v)
					}, pin.id))] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "reddit-card sticky top-2 flex min-h-[320px] flex-col overflow-hidden lg:max-h-[calc(100dvh-8rem)]",
						children: !ready || !selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid flex-1 place-items-center p-8 text-sm text-[var(--color-muted)]",
							children: "Select a confession"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-0 border-b border-[var(--color-border)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoteRail, {
								body: selected.body,
								score: selected.community?.score,
								onVote: (v) => void voteBody(selected.body, selected.style, v)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[11px] text-[var(--color-muted)]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-2 py-0.5 text-[10px] font-medium text-fuchsia-300",
											children: "Down bad"
										}),
										" ",
										"· ",
										STYLE_LABELS[selected.style],
										isRemix || draftDirty ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-1 text-[var(--color-pin)]",
											children: "· remix"
										}) : null
									]
								}), selected.community ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1.5 text-[11px] text-[var(--color-subtle)]",
									children: [
										formatCommunityScore(selected.community),
										" · ",
										selected.community.ups,
										" up ·",
										" ",
										selected.community.downs,
										" down"
									]
								}) : null]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-1 flex-col overflow-y-auto p-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-medium uppercase tracking-wider text-[var(--color-subtle)]",
											children: isRemix || draftDirty ? "Your remix" : "Your confession"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												size: "sm",
												variant: "secondary",
												onClick: handleRemix,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, {
													className: "size-3.5",
													"aria-hidden": true
												}), "Remix"]
											}), (isRemix || draftDirty) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "ghost",
												onClick: handleResetDraft,
												children: "Reset"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										value: draft,
										onChange: (e) => {
											setDraft(e.target.value);
											setIsRemix(true);
										},
										rows: 3,
										maxLength: 280,
										className: "w-full resize-y rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2.5 text-base font-medium leading-snug text-[var(--color-fg)] placeholder:text-[var(--color-subtle)] focus:border-[var(--color-link)] focus:outline-none",
										"aria-label": "Confession draft"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[10px] text-[var(--color-subtle)]",
										children: [
											"Edit or Remix, then copy.",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono tabular",
												children: [draft.length, "/280"]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-2 pt-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											className: "w-full",
											onClick: () => void handleCopy(),
											children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
												className: "size-3.5",
												"aria-hidden": true
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
												className: "size-3.5",
												"aria-hidden": true
											}), isRemix || draftDirty ? "Copy remix" : "Copy confession"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap gap-2",
											children: [savedBodies.has(selected.body) || savedIds.has(selected.id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												variant: "ghost",
												size: "sm",
												onClick: () => {
													const p = savedPins.find((x) => x.body === selected.body);
													if (p) unsavePin(p.id);
												},
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookmarkCheck, {
													className: "size-3.5",
													"aria-hidden": true
												}), "Unsave"]
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												variant: "ghost",
												size: "sm",
												onClick: () => {
													if (selectedPinId && pins.some((p) => p.id === selected.id)) savePin(selected.id);
													else saveBody(selected.body, selected.style);
												},
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, {
													className: "size-3.5",
													"aria-hidden": true
												}), "Save"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												variant: "ghost",
												size: "sm",
												onClick: () => {
													if (selectedPinId && pins.some((p) => p.id === selected.id)) markPinUsed(selected.id);
													else markBodyUsed(selected.body, selected.style);
												},
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
													className: "size-3.5",
													"aria-hidden": true
												}), "Mark used"]
											})]
										})]
									})
								]
							})
						})] })
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaCopy, {
				variant: "footer",
				onCopied: setToast,
				className: "mt-auto"
			})
		]
	});
}
function Toast() {
	const toast = useGameStore((s) => s.toast);
	const clearToast = useGameStore((s) => s.clearToast);
	(0, import_react.useEffect)(() => {
		if (!toast) return;
		const t = window.setTimeout(clearToast, 3200);
		return () => window.clearTimeout(t);
	}, [toast, clearToast]);
	if (!toast) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "status",
		className: "fixed bottom-4 left-1/2 z-50 w-[min(92vw,28rem)] -translate-x-1/2 rounded-[var(--radius-md)] border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-fg)] shadow-lg",
		children: toast
	});
}
/** Approved Anyway — mod pin finder only. */
function GameShell() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinFinder, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toast, {})] });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameShell, {});
}
//#endregion
export { Home as component };
