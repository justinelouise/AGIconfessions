import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { M as require_jsx_runtime, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as signOut, n as authClient, r as cn, t as Button } from "./client-DpDmp4x-.mjs";
import { _ as Flame, a as Sparkles, b as ArrowRight, c as Play, d as Map, f as Lock, g as GripVertical, h as Heart, i as Tag, l as Pin, m as House, n as Trophy, o as Shield, p as Layers, s as RefreshCw, t as X, u as MessageCircle, v as Bomb, x as ArrowBigUp, y as Award } from "../_libs/lucide-react.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DXRnYYjU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SUBREDDITS = [
	"r/ProgrammerHumor",
	"r/vibecoding",
	"r/anime",
	"r/Animesuggest",
	"r/AITA",
	"r/mildlyinfuriating",
	"r/technology",
	"r/webdev",
	"r/LocalLLaMA",
	"r/rant",
	"r/RelationshipAdvice",
	"r/copypasta",
	"r/nottheonion",
	"r/OutOfTheLoop",
	"r/ModSupport"
];
var AUTHORS = [
	"throwaway_vibe42",
	"css_is_my_personality",
	"senpai_noticed",
	"deleted_for_drama",
	"npm_install_life",
	"mod_on_a_powertrip",
	"waifu_compiler",
	"keyboard_warrior99",
	"aita_but_make_it_css",
	"lurker_since_2012",
	"banana_for_scale",
	"not_a_bot_promise",
	"async_await_me",
	"flair_police",
	"upvote_farmer_x"
];
var TITLES = [
	{
		title: "AITA for rewriting the entire monorepo in one night because Claude said 'ship it'?",
		body: "I am a senior (3 months). I deleted 14 services. CI is red. My manager is crying. But the code SMELLS like vibes. Update: they revoked my deploy key.",
		flair: "aita",
		chaos: 78,
		funny: 92
	},
	{
		title: "My co-mod sticky'd a greentext as the community guidelines. Help?",
		body: "The greentext starts with 'be me, head mod'. Half the sub thinks it's canon law. The other half is LARPing as Anonymous.",
		flair: "meta",
		chaos: 85,
		funny: 88
	},
	{
		title: "Is it normal that my production database is just a Google Sheet named 'pls_dont_delete'?",
		body: "We have 40k users. The Sheet has pivot tables. Someone keeps sorting column A. Investors call it 'data mesh'.",
		flair: "tech-support",
		chaos: 60,
		funny: 95
	},
	{
		title: "Which anime girl best represents TypeScript's type system?",
		body: "I'm arguing with my team. I say it's a kuudere who gaslights you at compile time. My tech lead says it's a yandere that locks you in strict mode.",
		flair: "anime",
		chaos: 35,
		funny: 90
	},
	{
		title: "Hot take: code review is just fanfiction of your PR with more gatekeeping",
		body: "Every LGTM is a kudos. Every 'nit:' is a plot hole. Merge conflicts are shipping delays. Change my mind or ban me.",
		flair: "hot-take",
		chaos: 55,
		funny: 80
	},
	{
		title: "UPDATE: my waifu pillow is now a certified SRE on-call contact",
		body: "PagerDuty routes to her first. Mean time to cuddle is 12s. Leadership wants an RCA for last night's outage. She was offline for laundry.",
		flair: "shitpost",
		chaos: 70,
		funny: 86
	},
	{
		title: "AITA for locking a thread because someone said 'just use jQuery'?",
		body: "I am the only active mod. Thread hit 2k comments in 40 minutes. I may have also banned the word 'bootstrap'. The appeals queue is now a novel.",
		flair: "aita",
		chaos: 72,
		funny: 84
	},
	{
		title: "I trained a LoRA on our subreddit rules and now it mods better than me",
		body: "It auto-removes 'first' comments, awards unironic effort posts, and DMs me 'touch grass' every hour. Should I make it head mod?",
		flair: "meta",
		chaos: 48,
		funny: 91
	},
	{
		title: "My girlfriend left me because I named all our plants after CSS properties",
		body: "Margin collapsed. Padding left. Z-index is in the void. She took Flexbox (the cat). AITA for using `!important` in the breakup text?",
		flair: "drama",
		chaos: 65,
		funny: 93
	},
	{
		title: "Official: we are banning all posts that don't include a screenshot of the IDE with anime wallpaper",
		body: "Mod team voted 3-2. The two naysayers have been reassigned to flair enforcement. Compliance starts Monday. No exceptions for NeoVim users.",
		flair: "meta",
		chaos: 58,
		funny: 82
	},
	{
		title: "TIL `rm -rf /` is not a valid spring cleaning tip for your root of trust",
		body: "Company laptop now boots to a blinking cursor of pure shame. IT asked if I 'vibe coded' the incident. I said yes. HR wants a meeting.",
		flair: "shitpost",
		chaos: 80,
		funny: 89
	},
	{
		title: "Ranking every React hook by how much it reminds me of a toxic ex",
		body: "useEffect: shows up uninvited and cleans up never. useMemo: remembers everything I said in 2019. useContext: everyone knows our business.",
		flair: "hot-take",
		chaos: 40,
		funny: 94
	},
	{
		title: "Please help: my open source package is popular and people expect docs",
		body: "README is just a GIF of a dancing cat and the word 'hopefully'. Issue #1 is 'what does this do'. Issue #400 is still 'what does this do'.",
		flair: "tech-support",
		chaos: 30,
		funny: 87
	},
	{
		title: "AITA for pin-spamming a 12-page manifesto about tabs vs spaces?",
		body: "I used the mod pin 9 times in one hour. Community manager said I weaponized the UI. I said the UI was already a weapon.",
		flair: "aita",
		chaos: 75,
		funny: 79
	},
	{
		title: "I shipped a dating app for anime girls and code reviewers only",
		body: "Swipe right on clean diffs. Swipe left on god classes. Match rate is 2%. One guy matched with himself via a mirror PR. Product-market fit?",
		flair: "anime",
		chaos: 42,
		funny: 88
	},
	{
		title: "The subreddit karma economy has collapsed and only copypasta remains",
		body: "Nobody posts original thoughts. Every top comment is the bee movie script but for Kubernetes. I tried to ban copypasta. Now I AM the copypasta.",
		flair: "drama",
		chaos: 68,
		funny: 85
	},
	{
		title: "Unpopular opinion: dark mode is a personality, not a theme",
		body: "If you code in light mode I assume you also put milk before cereal and enjoy meetings. This is a safe space for OLED aristocrats only.",
		flair: "hot-take",
		chaos: 50,
		funny: 76
	},
	{
		title: "My linter rejected my confession of love for failing max-len",
		body: "I wrote a heartfelt letter. Prettier wrapped it at column 80 mid-sentence. She thought I was ghosting mid-vowel. Romance is dead and ESLint killed it.",
		flair: "wholesome",
		chaos: 22,
		funny: 90
	},
	{
		title: "We replaced standup with a Discord channel of only anime reaction images",
		body: "Velocity is up 40%. Nobody knows why. The PM sends 'poggers' when deploys succeed. Finance wants metrics. I sent a screenshot of a cat typing.",
		flair: "shitpost",
		chaos: 45,
		funny: 92
	},
	{
		title: "Mod applications open: must survive a 3-hour vibecheck and name 5 waifus",
		body: "Bonus points if you have ever nuked a thread while crying. Remote only. Compensation is a custom flair and the void staring back.",
		flair: "meta",
		chaos: 38,
		funny: 83
	},
	{
		title: "AITA for soft-locking the entire frontend because a user said 'AI will replace you'?",
		body: "I put a CSS `pointer-events: none` on the root for their account only. They filed a bug. I marked it 'working as designed'. Update: legal is involved.",
		flair: "aita",
		chaos: 88,
		funny: 81
	},
	{
		title: "This sub's average age is now 'wrote their first Hello World during a layoffs wave'",
		body: "Census bot results are in. 61% learned React from a TikTok. 12% are my alts. 3% claim to be PHP developers who 'found peace'.",
		flair: "meta",
		chaos: 33,
		funny: 78
	},
	{
		title: "I asked ChatGPT to moderate and it banned me for 'insufficient whimsy'",
		body: "The bot left a 400-word essay on my appeal about the spirit of the community. It awarded itself Gold. The other mods think it's based.",
		flair: "drama",
		chaos: 70,
		funny: 96
	},
	{
		title: "Show-off Saturday: my mechanical keyboard has a keycap of every banned user",
		body: "Spacebar is the brigader from 2022. Escape is the guy who posted seven meatspin links (gone). Enter is me, every time I regret a decision.",
		flair: "shitpost",
		chaos: 62,
		funny: 74
	}
];
var idCounter = 0;
function pick(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}
function jitter(n, amount = 12) {
	return Math.max(1, Math.min(100, Math.round(n + (Math.random() * amount * 2 - amount))));
}
function generateThread() {
	const template = pick(TITLES);
	idCounter += 1;
	return {
		id: `t_${Date.now()}_${idCounter}`,
		subreddit: pick(SUBREDDITS),
		title: template.title,
		body: template.body,
		author: pick(AUTHORS),
		upvotes: Math.floor(Math.random() * 42e3) + 12,
		comments: Math.floor(Math.random() * 1800) + 3,
		flair: template.flair,
		chaos: jitter(template.chaos),
		funny: jitter(template.funny),
		ageMinutes: Math.floor(Math.random() * 180) + 1,
		status: "hot"
	};
}
function generateFeed(count) {
	return Array.from({ length: count }, () => generateThread());
}
var MOD_ACTIONS = [
	{
		id: "sticky",
		label: "Sticky",
		hint: "Pin to the top of the timeline",
		icon: "Pin"
	},
	{
		id: "award",
		label: "Award",
		hint: "Throw digital confetti at comedy gold",
		icon: "Award"
	},
	{
		id: "lock",
		label: "Lock",
		hint: "End the argument, keep the screenshots",
		icon: "Lock"
	},
	{
		id: "nuke",
		label: "Nuke",
		hint: "Remove and pretend it never happened",
		icon: "Bomb"
	},
	{
		id: "vibecheck",
		label: "Vibecheck",
		hint: "Leave a cryptic mod note",
		icon: "Sparkles"
	},
	{
		id: "engage",
		label: "Engage",
		hint: "Reply as yourself (high risk, high meme)",
		icon: "MessageCircle"
	},
	{
		id: "megathread",
		label: "Megathread",
		hint: "Contain the chaos in one place",
		icon: "Layers"
	},
	{
		id: "flair",
		label: "Flair Police",
		hint: "Correct the flair with righteous fury",
		icon: "Tag"
	}
];
var VIBE_LINES = [
	"vibes: immaculate. source: trust me bro.",
	"Rule 0: be funny or be gone.",
	"This post has been blessed by the Mod Council of Soft Lighting.",
	"Locked for your protection. And mine. Mostly mine.",
	"Awarded for services to shitposting excellence.",
	"Removed for failing the vibe check. Appeal with a haiku.",
	"Sticky'd until the heat death of the frontend framework wars.",
	"Flair corrected. You're welcome, civilization."
];
function resolveModAction(thread, action) {
	const funny = thread.funny / 100;
	const chaos = thread.chaos / 100;
	const baseKarma = Math.round(8 + thread.funny * .35 + Math.random() * 10);
	switch (action) {
		case "sticky": return {
			label: "Sticky'd",
			flavor: pick([
				`Pinned "${thread.title.slice(0, 42)}…" — homepage now 40% more unhinged.`,
				"Sticky applied. Newcomers will be confused within 3 seconds.",
				"The timeline bends to your will. Slightly sticky will."
			]),
			karmaDelta: baseKarma + 12,
			dramaDelta: Math.round(chaos * 8),
			vibeDelta: Math.round(10 + funny * 12),
			process: true
		};
		case "award": return {
			label: "Awarded",
			flavor: pick([
				"You minted a custom award: 'Certified Bit'. Inflation incoming.",
				"Gold? No. We gave it 'Correct Opinion'. Markets panicked.",
				"Confetti everywhere. Ops wants to know who paid for confetti."
			]),
			karmaDelta: baseKarma + Math.round(funny * 20),
			dramaDelta: Math.round(chaos * 4),
			vibeDelta: Math.round(14 + funny * 16),
			process: true
		};
		case "lock": return {
			label: "Locked",
			flavor: pick([
				"Thread locked. Commenters rage in DMs instead. Net calm: +1.",
				"Closed for repairs. The repairs are your sanity.",
				"You dropped the hammer. It was a foam hammer, but still."
			]),
			karmaDelta: baseKarma,
			dramaDelta: -Math.round(12 + chaos * 20),
			vibeDelta: Math.round(4 + (1 - chaos) * 10),
			process: true
		};
		case "nuke": return {
			label: "Nuked",
			flavor: pick([
				"Gone. Reduced to atoms. The Wayback Machine weeps.",
				"Removed for 'reasons'. The reasons are classified vibes.",
				"You hit remove so hard the database filed a noise complaint."
			]),
			karmaDelta: Math.round(baseKarma * .4) - Math.round(funny * 8),
			dramaDelta: Math.round(18 + chaos * 25),
			vibeDelta: -Math.round(6 + funny * 8),
			nuke: true,
			process: true
		};
		case "vibecheck": return {
			label: "Vibechecked",
			flavor: pick(VIBE_LINES),
			karmaDelta: baseKarma + 6,
			dramaDelta: Math.round(chaos * 10 - 6),
			vibeDelta: Math.round(18 + funny * 14),
			process: true
		};
		case "engage": return {
			label: "Engaged",
			flavor: pick([
				"You replied with a 3-paragraph monologue and a cat GIF. Ratio pending.",
				"Your comment is now the top reply. HR is taking notes.",
				"You 'just asked questions'. The questions were chaos grenades."
			]),
			karmaDelta: Math.round(baseKarma * (.6 + funny)),
			dramaDelta: Math.round(15 + chaos * 30),
			vibeDelta: Math.round(8 + funny * 10 - chaos * 6),
			process: true
		};
		case "megathread": return {
			label: "Megathreaded",
			flavor: pick([
				"All related posts redirected. Order restored. Memes concentrated.",
				"One thread to rule them all. Two to ban them.",
				"Containment successful. Drama density increased 4x inside the box."
			]),
			karmaDelta: baseKarma + 8,
			dramaDelta: -Math.round(8 + chaos * 12),
			vibeDelta: Math.round(10 + funny * 8),
			process: true
		};
		case "flair": return {
			label: "Flaired",
			flavor: pick([
				`Re-flaired as "${thread.flair}" with judicial sass.`,
				"Flair police deployed. No survivors. Many feelings.",
				"Taxonomy restored. Aristotle would be proud. Or banned."
			]),
			karmaDelta: Math.round(baseKarma * .7),
			dramaDelta: Math.round(chaos * 6),
			vibeDelta: Math.round(6 + funny * 6),
			process: true
		};
	}
}
var RANKS = [
	{
		min: 0,
		title: "Lurklet",
		blurb: "You refresh. You do not touch."
	},
	{
		min: 80,
		title: "Power User",
		blurb: "You have opinions and a custom flair."
	},
	{
		min: 200,
		title: "Junior Mod",
		blurb: "You have the ban hammer. It is foam."
	},
	{
		min: 400,
		title: "Vibe Mod",
		blurb: "Drama bends around your soft lighting."
	},
	{
		min: 700,
		title: "Head Admin",
		blurb: "The stylesheet fears you."
	},
	{
		min: 1100,
		title: "Anime Overlord",
		blurb: "You are the terms of service."
	}
];
function rankForKarma(karma) {
	let current = RANKS[0];
	for (const r of RANKS) if (karma >= r.min) current = r;
	return current;
}
function formatScore(n) {
	if (Math.abs(n) >= 1e3) return `${(n / 1e3).toFixed(1)}k`;
	return String(n);
}
var FLAIR_LABELS = {
	shitpost: "Shitpost",
	drama: "Drama",
	wholesome: "Wholesome",
	meta: "Meta",
	"tech-support": "Tech Support",
	aita: "AITA",
	anime: "Anime",
	"hot-take": "Hot Take"
};
var FEED_SIZE = 8;
var MAX_LOG = 40;
function emptyCourse() {
	return Array.from({ length: 6 }, () => null);
}
function clamp(n, min, max) {
	return Math.max(min, Math.min(max, n));
}
function findThread(feed, course, id) {
	return feed.find((t) => t.id === id) ?? course.find((t) => t?.id === id) ?? void 0;
}
var useGameStore = create()(persist((set, get) => ({
	screen: "title",
	karma: 0,
	drama: 12,
	vibes: 40,
	shifts: 0,
	bestKarma: 0,
	feed: generateFeed(FEED_SIZE),
	course: emptyCourse(),
	selectedId: null,
	log: [],
	lastShiftSummary: null,
	toast: null,
	startGame: () => set({
		screen: "play",
		toast: "Hot feed is live. Map a course, then run your shift."
	}),
	backToTitle: () => set({
		screen: "title",
		selectedId: null
	}),
	refreshFeed: () => {
		set({
			feed: generateFeed(FEED_SIZE),
			toast: "Fresh dump of chaos. Scroll responsibly."
		});
	},
	selectThread: (id) => set({ selectedId: id }),
	claimToCourse: (threadId, slotIndex) => {
		const { feed, course } = get();
		const thread = feed.find((t) => t.id === threadId);
		if (!thread || thread.status !== "hot") return;
		if (course.some((c) => c?.id === threadId)) {
			set({ toast: "Already on the course, senpai." });
			return;
		}
		const open = slotIndex !== void 0 && course[slotIndex] === null ? slotIndex : course.findIndex((c) => c === null);
		if (open === -1) {
			set({ toast: "Course full. Run a shift or free a slot." });
			return;
		}
		const claimed = {
			...thread,
			status: "claimed"
		};
		const nextCourse = [...course];
		nextCourse[open] = claimed;
		set({
			course: nextCourse,
			feed: feed.map((t) => t.id === threadId ? claimed : t),
			selectedId: claimed.id,
			toast: `Mapped to station ${open + 1}.`
		});
	},
	removeFromCourse: (slotIndex) => {
		const { course, feed } = get();
		const thread = course[slotIndex];
		if (!thread) return;
		const nextCourse = [...course];
		nextCourse[slotIndex] = null;
		const restored = {
			...thread,
			status: "hot"
		};
		const nextFeed = feed.map((t) => t.id === thread.id ? restored : t);
		set({
			course: nextCourse,
			feed: nextFeed.some((t) => t.id === thread.id) ? nextFeed : [restored, ...nextFeed].slice(0, 10),
			toast: "Thread returned to the wild."
		});
	},
	reorderCourse: (from, to) => {
		const { course } = get();
		if (from === to) return;
		if (from < 0 || to < 0 || from >= course.length || to >= course.length) return;
		const next = [...course];
		const [item] = next.splice(from, 1);
		next.splice(to, 0, item ?? null);
		set({ course: next });
	},
	performAction: (threadId, action) => {
		const state = get();
		const thread = findThread(state.feed, state.course, threadId);
		if (!thread) return;
		const result = resolveModAction(thread, action);
		let karma = state.karma + result.karmaDelta;
		let drama = clamp(state.drama + result.dramaDelta, 0, 100);
		let vibes = clamp(state.vibes + result.vibeDelta, 0, 100);
		if (drama >= 100) {
			karma = Math.max(0, karma - 25);
			vibes = clamp(vibes - 15, 0, 100);
			drama = 70;
		}
		const entry = {
			id: `log_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
			at: Date.now(),
			text: `${result.label}: ${result.flavor}`,
			karmaDelta: result.karmaDelta,
			dramaDelta: result.dramaDelta,
			vibeDelta: result.vibeDelta
		};
		const course = state.course.map((c) => {
			if (!c || c.id !== threadId) return c;
			if (result.nuke) return null;
			if (result.process) return {
				...c,
				status: "processed"
			};
			return c;
		});
		let feed = state.feed.map((t) => {
			if (t.id !== threadId) return t;
			if (result.nuke) return {
				...t,
				status: "nuked"
			};
			if (result.process) return {
				...t,
				status: "processed"
			};
			return t;
		}).filter((t) => t.status !== "nuked");
		if (result.nuke || result.process) {
			feed = feed.filter((t) => t.id !== threadId);
			while (feed.length < FEED_SIZE) feed.push(generateThread());
		}
		const rankBefore = rankForKarma(state.karma).title;
		const rankAfter = rankForKarma(karma).title;
		let toast = result.flavor;
		if (rankBefore !== rankAfter) toast = `Rank up: ${rankAfter}! ${result.flavor}`;
		set({
			karma,
			drama,
			vibes,
			course,
			feed,
			bestKarma: Math.max(state.bestKarma, karma),
			log: [entry, ...state.log].slice(0, MAX_LOG),
			selectedId: result.nuke || result.process ? null : threadId,
			toast
		});
	},
	runShift: () => {
		const { course, karma, drama, vibes, shifts, bestKarma, log } = get();
		const active = course.filter((c) => !!c);
		if (active.length === 0) {
			set({ toast: "Map at least one thread before running a shift." });
			return;
		}
		let k = karma;
		let d = drama;
		let v = vibes;
		const lines = [];
		active.forEach((thread, i) => {
			const orderBonus = Math.max(0, 6 - i) * 2;
			const funnyPay = Math.round(thread.funny * .4 + orderBonus);
			const chaosTax = Math.round(thread.chaos * .15);
			const alreadyDone = thread.status === "processed";
			const pay = Math.round(funnyPay * (alreadyDone ? 1.35 : .85));
			k += pay;
			d = clamp(d + chaosTax - (alreadyDone ? 8 : 0), 0, 100);
			v = clamp(v + Math.round((thread.funny - thread.chaos) * .12) + (alreadyDone ? 6 : 0), 0, 100);
			lines.push(`Station ${i + 1}: ${alreadyDone ? "polished" : "raw"} · +${pay} karma · ${thread.title.slice(0, 48)}…`);
		});
		const flairs = new Set(active.map((t) => t.flair));
		if (flairs.has("anime") && (flairs.has("tech-support") || flairs.has("shitpost"))) {
			k += 30;
			v = clamp(v + 12, 0, 100);
			lines.push("Synergy: Anime × Tech — the sacred vibecoder alignment. +30 karma.");
		}
		if (active.length === 6) {
			k += 40;
			lines.push("Full course bonus: you planned the entire timeline. +40 karma.");
		}
		if (d >= 90) {
			k = Math.max(0, k - 20);
			lines.push("Drama critical — community managers are in the Discord. -20 karma.");
		}
		const summary = lines.join("\n");
		const entry = {
			id: `log_shift_${Date.now()}`,
			at: Date.now(),
			text: `Shift #${shifts + 1} complete. Net course: ${active.length} threads.`,
			karmaDelta: k - karma,
			dramaDelta: d - drama,
			vibeDelta: v - vibes
		};
		set({
			karma: k,
			drama: d,
			vibes: v,
			shifts: shifts + 1,
			bestKarma: Math.max(bestKarma, k),
			course: emptyCourse(),
			feed: generateFeed(FEED_SIZE),
			selectedId: null,
			lastShiftSummary: summary,
			screen: "shift-result",
			log: [entry, ...log].slice(0, MAX_LOG),
			toast: null
		});
	},
	clearToast: () => set({ toast: null }),
	resetProgress: () => set({
		screen: "title",
		karma: 0,
		drama: 12,
		vibes: 40,
		shifts: 0,
		feed: generateFeed(FEED_SIZE),
		course: emptyCourse(),
		selectedId: null,
		log: [],
		lastShiftSummary: null,
		toast: "Progress wiped. New identity, who dis?"
	})
}), {
	name: "thread-course-v1",
	partialize: (s) => ({
		karma: s.karma,
		drama: s.drama,
		vibes: s.vibes,
		shifts: s.shifts,
		bestKarma: s.bestKarma
	})
}));
var ICONS = {
	Pin,
	Award,
	Lock,
	Bomb,
	Sparkles,
	MessageCircle,
	Layers,
	Tag
};
function ActionPanel() {
	const selectedId = useGameStore((s) => s.selectedId);
	const feed = useGameStore((s) => s.feed);
	const course = useGameStore((s) => s.course);
	const log = useGameStore((s) => s.log);
	const performAction = useGameStore((s) => s.performAction);
	const claimToCourse = useGameStore((s) => s.claimToCourse);
	const thread = feed.find((t) => t.id === selectedId) ?? course.find((t) => t?.id === selectedId) ?? null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex h-full min-h-0 flex-col rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-b border-[var(--color-border)] px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-base font-semibold tracking-tight",
				children: "Mod Console"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-xs text-[var(--color-muted)]",
				children: "Engage, police, or lovingly ruin someone's day"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-0 flex-1 space-y-4 overflow-y-auto p-3 sm:p-4",
			children: [!thread ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-[var(--radius-lg)] border border-dashed border-[var(--color-border)] bg-[var(--color-bg)]/50 px-4 py-8 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-[var(--color-muted)]",
					children: "Select a thread from the feed or course to open the console."
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[11px] text-[var(--color-accent-dim)]",
						children: [
							thread.subreddit,
							" · ",
							FLAIR_LABELS[thread.flair]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-display text-sm font-semibold leading-snug",
						children: thread.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs leading-relaxed text-[var(--color-muted)]",
						children: thread.body
					}),
					thread.status === "hot" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-3 w-full",
						size: "sm",
						variant: "secondary",
						onClick: () => claimToCourse(thread.id),
						children: "Add to course map"
					}) : null
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs font-medium uppercase tracking-wider text-[var(--color-subtle)]",
				children: "Actions"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2",
				children: MOD_ACTIONS.map((action) => {
					const Icon = ICONS[action.icon] ?? Sparkles;
					const danger = action.id === "nuke" || action.id === "engage";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: danger ? "danger" : "secondary",
						size: "sm",
						className: "h-auto flex-col items-start gap-1 px-3 py-2.5 text-left",
						disabled: thread.status === "processed" || thread.status === "nuked",
						onClick: () => performAction(thread.id, action.id),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 text-xs font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-3.5 shrink-0",
								"aria-hidden": true
							}), action.label]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-normal leading-snug opacity-70",
							children: action.hint
						})]
					}, action.id);
				})
			})] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs font-medium uppercase tracking-wider text-[var(--color-subtle)]",
				children: "Shift log"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "space-y-2",
				children: [log.slice(0, 8).map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg)]/60 px-3 py-2 text-xs leading-relaxed text-[var(--color-muted)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[var(--color-fg)]/90",
						children: entry.text
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 font-mono text-[10px] tabular text-[var(--color-subtle)]",
						children: [
							entry.karmaDelta >= 0 ? "+" : "",
							entry.karmaDelta,
							" karma · ",
							entry.dramaDelta >= 0 ? "+" : "",
							entry.dramaDelta,
							" drama · ",
							entry.vibeDelta >= 0 ? "+" : "",
							entry.vibeDelta,
							" vibes"
						]
					})]
				}, entry.id)), log.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "text-xs text-[var(--color-subtle)]",
					children: "No actions yet. Be brave."
				}) : null]
			})] })]
		})]
	});
}
var flairTone = {
	shitpost: "text-[var(--color-pin)] border-[var(--color-pin)]/30 bg-[var(--color-pin)]/10",
	drama: "text-[var(--color-drama)] border-[var(--color-drama)]/30 bg-[var(--color-drama)]/10",
	wholesome: "text-[var(--color-karma)] border-[var(--color-karma)]/30 bg-[var(--color-karma)]/10",
	meta: "text-[var(--color-vibe)] border-[var(--color-vibe)]/30 bg-[var(--color-vibe)]/10",
	"tech-support": "text-[var(--color-vibe)] border-[var(--color-vibe)]/30 bg-[var(--color-vibe)]/10",
	aita: "text-[var(--color-accent)] border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10",
	anime: "text-[var(--color-accent)] border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10",
	"hot-take": "text-[var(--color-drama)] border-[var(--color-drama)]/30 bg-[var(--color-drama)]/10"
};
function ThreadCard({ thread, selected, onSelect, compact, slotLabel }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onSelect,
		className: cn("w-full rounded-[var(--radius-lg)] border p-3 text-left transition-colors duration-150", "bg-[var(--color-surface)] hover:bg-[var(--color-surface-hover)]", selected ? "border-[var(--color-accent)] ring-1 ring-[var(--color-accent)]/40" : "border-[var(--color-border)]", thread.status === "processed" && "opacity-75", compact && "p-2.5"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex flex-wrap items-center gap-2",
				children: [
					slotLabel ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-[var(--radius-xs)] bg-[var(--color-bg)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--color-muted)]",
						children: slotLabel
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[11px] text-[var(--color-accent-dim)]",
						children: thread.subreddit
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("rounded-full border px-2 py-0.5 text-[10px] font-medium tracking-wide", flairTone[thread.flair] ?? flairTone.meta),
						children: FLAIR_LABELS[thread.flair]
					}),
					thread.status === "claimed" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] uppercase tracking-wider text-[var(--color-pin)]",
						children: "On course"
					}) : null,
					thread.status === "processed" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] uppercase tracking-wider text-[var(--color-karma)]",
						children: "Moderated"
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: cn("font-display font-semibold leading-snug tracking-tight text-[var(--color-fg)]", compact ? "text-sm" : "text-[15px]"),
				children: thread.title
			}),
			!compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 line-clamp-2 text-xs leading-relaxed text-[var(--color-muted)]",
				children: thread.body
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap items-center gap-3 text-[11px] text-[var(--color-subtle)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[var(--color-muted)]",
						children: ["u/", thread.author]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1 tabular",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowBigUp, {
							className: "size-3.5",
							"aria-hidden": true
						}), formatScore(thread.upvotes)]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1 tabular",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
							className: "size-3",
							"aria-hidden": true
						}), formatScore(thread.comments)]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "tabular",
						children: ["Funny ", thread.funny]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "tabular",
						children: ["Chaos ", thread.chaos]
					})
				]
			})
		]
	});
}
function CourseMap() {
	const course = useGameStore((s) => s.course);
	const selectedId = useGameStore((s) => s.selectedId);
	const selectThread = useGameStore((s) => s.selectThread);
	const removeFromCourse = useGameStore((s) => s.removeFromCourse);
	const reorderCourse = useGameStore((s) => s.reorderCourse);
	const claimToCourse = useGameStore((s) => s.claimToCourse);
	const runShift = useGameStore((s) => s.runShift);
	const [dragFrom, setDragFrom] = (0, import_react.useState)(null);
	const filled = course.filter(Boolean).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex h-full min-h-0 flex-col rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] course-path",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-start justify-between gap-3 border-b border-[var(--color-border)] px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-base font-semibold tracking-tight",
				children: "Course Map"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-0.5 text-xs text-[var(--color-muted)]",
				children: [
					"Plot the perfect mod shift path · ",
					filled,
					"/",
					6,
					" stations"
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: runShift,
				disabled: filled === 0,
				className: "shrink-0",
				size: "sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
					className: "size-3.5",
					"aria-hidden": true
				}), "Run shift"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-h-0 flex-1 overflow-y-auto p-3 sm:p-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative flex flex-col gap-2",
				children: course.map((thread, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [index < course.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-[18px] top-full z-0 h-2 w-px bg-[var(--color-border-strong)]",
						"aria-hidden": true
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("relative z-10 flex gap-2 rounded-[var(--radius-lg)] border border-dashed p-1.5 transition-colors", thread ? "border-transparent bg-transparent p-0" : "border-[var(--color-border)] bg-[var(--color-bg)]/40", dragFrom === index && "opacity-60"),
						onDragOver: (e) => {
							e.preventDefault();
						},
						onDrop: (e) => {
							e.preventDefault();
							const fromFeed = e.dataTransfer.getData("text/thread-id");
							if (fromFeed) {
								claimToCourse(fromFeed, index);
								return;
							}
							if (dragFrom !== null) {
								reorderCourse(dragFrom, index);
								setDragFrom(null);
							}
						},
						children: thread ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group flex w-full items-stretch gap-1",
							draggable: true,
							onDragStart: () => setDragFrom(index),
							onDragEnd: () => setDragFrom(null),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex shrink-0 flex-col items-center justify-center gap-1 px-0.5 text-[var(--color-subtle)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, {
										className: "size-4",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px]",
										children: index + 1
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "min-w-0 flex-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThreadCard, {
										thread,
										compact: true,
										selected: selectedId === thread.id,
										onSelect: () => selectThread(thread.id),
										slotLabel: `S${index + 1}`
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": "Remove from course",
									className: "mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-sm)] text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-fg)]",
									onClick: () => removeFromCourse(index),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex w-full items-center gap-3 px-3 py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] font-mono text-xs text-[var(--color-muted)]",
									children: index + 1
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-[var(--color-muted)]",
										children: "Empty station"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-[var(--color-subtle)]",
										children: "Claim a hot thread or drop one here"
									})]
								}),
								index === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "ml-auto size-4 text-[var(--color-subtle)]",
									"aria-hidden": true
								}) : null
							]
						})
					})]
				}, `slot-${index}`))
			})
		})]
	});
}
function FeedPanel() {
	const feed = useGameStore((s) => s.feed);
	const selectedId = useGameStore((s) => s.selectedId);
	const selectThread = useGameStore((s) => s.selectThread);
	const claimToCourse = useGameStore((s) => s.claimToCourse);
	const refreshFeed = useGameStore((s) => s.refreshFeed);
	const hot = feed.filter((t) => t.status === "hot" || t.status === "claimed");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex h-full min-h-0 flex-col rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-3 border-b border-[var(--color-border)] px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-base font-semibold tracking-tight",
				children: "Hot Feed"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-xs text-[var(--color-muted)]",
				children: "Funny threads hunting for a competent chaos gremlin"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "secondary",
				size: "sm",
				onClick: refreshFeed,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
					className: "size-3.5",
					"aria-hidden": true
				}), "Refresh"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-0 flex-1 space-y-2 overflow-y-auto p-3 sm:p-4",
			children: [hot.map((thread) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				draggable: thread.status === "hot",
				onDragStart: (e) => {
					if (thread.status !== "hot") return;
					e.dataTransfer.setData("text/thread-id", thread.id);
					e.dataTransfer.effectAllowed = "copy";
				},
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThreadCard, {
					thread,
					selected: selectedId === thread.id,
					onSelect: () => selectThread(thread.id)
				}), thread.status === "hot" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-end px-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						onClick: () => {
							selectThread(thread.id);
							claimToCourse(thread.id);
						},
						children: "Map to course"
					})
				}) : null]
			}, thread.id)), hot.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-10 text-center text-sm text-[var(--color-muted)]",
				children: "Feed empty. Hit refresh or finish a shift."
			}) : null]
		})]
	});
}
function ShiftResult() {
	const lastShiftSummary = useGameStore((s) => s.lastShiftSummary);
	const karma = useGameStore((s) => s.karma);
	const drama = useGameStore((s) => s.drama);
	const vibes = useGameStore((s) => s.vibes);
	const shifts = useGameStore((s) => s.shifts);
	const startGame = useGameStore((s) => s.startGame);
	const backToTitle = useGameStore((s) => s.backToTitle);
	const rank = rankForKarma(karma);
	const lines = (lastShiftSummary ?? "").split("\n").filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[calc(100dvh-var(--grok-banner-h,0px))] items-center justify-center bg-[var(--color-bg)] bg-grid px-4 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-lg rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.9)] sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-xs uppercase tracking-wider text-[var(--color-accent-dim)]",
					children: [
						"Shift #",
						shifts,
						" complete"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl",
					children: "Course processed"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-[var(--color-muted)]",
					children: [
						"Rank: ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[var(--color-fg)]",
							children: rank.title
						}),
						" — ",
						rank.blurb
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid grid-cols-3 gap-2",
					children: [
						{
							label: "Karma",
							value: karma
						},
						{
							label: "Drama",
							value: drama
						},
						{
							label: "Vibes",
							value: vibes
						}
					].map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase tracking-wider text-[var(--color-subtle)]",
							children: stat.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 font-display text-lg font-semibold tabular",
							children: stat.value
						})]
					}, stat.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 max-h-48 space-y-2 overflow-y-auto text-xs leading-relaxed text-[var(--color-muted)]",
					children: lines.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg)]/50 px-3 py-2",
						children: line
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "flex-1",
						onClick: startGame,
						children: "Next shift"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "flex-1",
						variant: "secondary",
						onClick: backToTitle,
						children: "HQ lobby"
					})]
				})
			]
		})
	});
}
function Meter({ label, value, max = 100, color, icon }) {
	const pct = Math.min(100, Math.round(value / max * 100));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0 flex-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-1 flex items-center justify-between gap-2 text-xs text-[var(--color-muted)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-1.5",
				children: [icon, label]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular font-medium text-[var(--color-fg)]",
				children: value
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-1.5 overflow-hidden rounded-full bg-[var(--color-surface)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full rounded-full transition-[width] duration-300 ease-out",
				style: {
					width: `${pct}%`,
					background: color
				}
			})
		})]
	});
}
function StatsBar() {
	const karma = useGameStore((s) => s.karma);
	const drama = useGameStore((s) => s.drama);
	const vibes = useGameStore((s) => s.vibes);
	const shifts = useGameStore((s) => s.shifts);
	const bestKarma = useGameStore((s) => s.bestKarma);
	const rank = rankForKarma(karma);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)]/90 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1400px] flex-col gap-3 px-3 py-3 sm:px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] font-display text-sm font-semibold text-[var(--color-accent)]",
						children: "TC"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm font-semibold tracking-tight sm:text-base",
							children: "Thread Course"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "truncate text-xs text-[var(--color-muted)]",
							children: [
								rank.title,
								" · ",
								rank.blurb
							]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3 text-xs sm:gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 tabular",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, {
									className: "size-3.5 text-[var(--color-pin)]",
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[var(--color-muted)]",
									children: "Karma"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-[var(--color-fg)]",
									children: karma
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 tabular text-[var(--color-muted)]",
							children: ["Shifts ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-[var(--color-fg)]",
								children: shifts
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "hidden items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 tabular text-[var(--color-muted)] sm:inline-flex",
							children: ["Best ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-[var(--color-fg)]",
								children: bestKarma
							})]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
						label: "Drama",
						value: drama,
						color: "var(--color-drama)",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, {
							className: "size-3.5 text-[var(--color-drama)]",
							"aria-hidden": true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
						label: "Vibes",
						value: vibes,
						color: "var(--color-vibe)",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
							className: "size-3.5 text-[var(--color-vibe)]",
							"aria-hidden": true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
						label: "Soft power",
						value: Math.min(100, Math.round(karma / 12)),
						color: "var(--color-karma)",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
							className: "size-3.5 text-[var(--color-karma)]",
							"aria-hidden": true
						})
					})
				]
			})]
		})
	});
}
/**
* Current user + loading state. Same behavior in live preview and when deployed:
*   - Auth enabled (default) -> the real signed-in user; `user` is `null` while
*                            the session resolves (`isPending: true`) and when
*                            signed out (`isPending: false`). Session comes from
*                            Better Auth `useSession()` → `/api/auth/get-session`
*                            (cookie when deployed; bearer in live preview).
*   - Auth disabled (`VITE_AUTH_ENABLED=false`) -> `DEV_USER`, never pending.
*
* Protect a route by waiting out `isPending` before acting on `user` —
* redirecting on `user: null` alone bounces signed-in visitors to sign-in on
* every hard reload:
*
*   import { RedirectToSignIn } from "@/lib/auth/gates";
*   const { user, isPending } = useCurrentUserState();
*   if (isPending) return null;              // still resolving — don't redirect yet
*   if (!user) return <RedirectToSignIn />;  // definitely signed out
*
* `authEnabled` is a module-level constant fixed at load, so the guarded hook
* call keeps a stable hook order across every render of a given component.
*/
function useCurrentUserState() {
	const { data, isPending } = authClient.useSession();
	const user = data?.user;
	return {
		user: user ? {
			id: user.id,
			displayName: user.name ?? null,
			primaryEmail: user.email ?? null,
			profileImageUrl: user.image ?? null,
			isDevFallback: false
		} : null,
		isPending
	};
}
/**
* Convenience view of `useCurrentUserState().user` for display (e.g.
* `user?.displayName ?? "Guest"`). NOTE: `null` means *loading OR signed out* —
* for redirects/guards use `useCurrentUserState()` and check `isPending`.
*/
function useCurrentUser() {
	return useCurrentUserState().user;
}
/** Render children only when a user is present (real session, or the disabled-auth dev user). */
function SignedIn({ children }) {
	const { user } = useCurrentUserState();
	return user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children }) : null;
}
/**
* Render children only once we KNOW the visitor is signed out (`isPending` has
* cleared and there is no user). Hidden while the session is still loading.
*/
function SignedOut({ children }) {
	const { user, isPending } = useCurrentUserState();
	if (isPending || user) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
/**
* Minimal signed-in identity chip + sign-out. Restyle freely (see the
* `design-ui` skill). Sign-out is only shown when auth is enabled (the
* disabled-auth dev user has nothing to sign out of).
*/
function UserButton() {
	const user = useCurrentUser();
	if (!user) return null;
	const label = user.displayName ?? user.primaryEmail ?? "Account";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [
			user.profileImageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: user.profileImageUrl,
				alt: "",
				className: "h-8 w-8 rounded-full object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-8 w-8 place-items-center rounded-full bg-black/10 text-sm font-medium dark:bg-white/20",
				children: label.charAt(0).toUpperCase()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-medium",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => void signOut(),
				className: "cursor-pointer text-sm underline-offset-4 opacity-70 hover:underline",
				children: "Sign out"
			})
		]
	});
}
function TitleScreen() {
	const startGame = useGameStore((s) => s.startGame);
	const karma = useGameStore((s) => s.karma);
	const bestKarma = useGameStore((s) => s.bestKarma);
	const shifts = useGameStore((s) => s.shifts);
	const resetProgress = useGameStore((s) => s.resetProgress);
	const rank = rankForKarma(karma);
	const { user, isPending } = useCurrentUserState();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-[calc(100dvh-var(--grok-banner-h,0px))] overflow-hidden bg-[var(--color-bg)] bg-grid",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 opacity-60",
			style: { background: "radial-gradient(ellipse 70% 50% at 70% 20%, color-mix(in oklab, var(--color-accent) 14%, transparent), transparent 60%)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto flex min-h-[calc(100dvh-var(--grok-banner-h,0px))] max-w-6xl flex-col px-4 py-6 sm:px-6 sm:py-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs tracking-wide text-[var(--color-muted)]",
					children: "r/VibeMods · internal tool (definitely not a game)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-8 animate-pulse rounded-full bg-[var(--color-surface)]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignedOut, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "rounded-[var(--radius-sm)] border border-[var(--color-border)] px-3 py-1.5 text-xs text-[var(--color-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-fg)]",
						children: "Sign in"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignedIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserButton, {}) })] })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid flex-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs text-[var(--color-muted)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
							className: "size-3.5 text-[var(--color-accent)]",
							"aria-hidden": true
						}), "For vibecoder mods who ship feelings"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--color-fg)] sm:text-5xl lg:text-[3.4rem]",
						children: "Thread Course"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg",
						children: [
							"You are ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[var(--color-fg)]",
								children: "Miko"
							}),
							", anime-adjacent head vibecoder of a cursed subreddit. Hunt funny threads, map the perfect engagement course, moderate with style, and climb from Lurklet to Anime Overlord."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-6 space-y-3 text-sm text-[var(--color-muted)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Map, {
									className: "mt-0.5 size-4 shrink-0 text-[var(--color-accent)]",
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "font-medium text-[var(--color-fg)]",
									children: "Map a course"
								}), " — claim hot posts into a 6-station shift path."] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
									className: "mt-0.5 size-4 shrink-0 text-[var(--color-accent)]",
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "font-medium text-[var(--color-fg)]",
									children: "Mod & engage"
								}), " — sticky, nuke, vibecheck, flair-police, or reply unhinged."] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
									className: "mt-0.5 size-4 shrink-0 text-[var(--color-accent)]",
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "font-medium text-[var(--color-fg)]",
									children: "Chase synergies"
								}), " — anime + tech threads pay extra. Full courses pay more."] })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							onClick: startGame,
							children: "Open mod queue"
						}), (karma > 0 || shifts > 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							variant: "secondary",
							onClick: resetProgress,
							children: "Reset progress"
						})]
					}),
					(karma > 0 || bestKarma > 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 font-mono text-xs text-[var(--color-subtle)]",
						children: [
							"Saved run · ",
							rank.title,
							" · karma ",
							karma,
							" · best ",
							bestKarma,
							" · shifts ",
							shifts,
							user ? ` · signed in as ${user.displayName}` : ""
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto w-full max-w-md",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "overflow-hidden rounded-[calc(var(--radius-xl)+4px)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_24px_80px_-32px_rgba(0,0,0,0.8)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/assets/miko-mod.jpg",
							alt: "Miko, the vibe mod — headset on, tablet ready",
							className: "aspect-[3/4] w-full object-cover object-top",
							width: 784,
							height: 1176
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-[var(--color-border)] px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm font-semibold",
								children: "Miko · Vibe Mod"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-xs text-[var(--color-muted)]",
								children: "“If it's not funny, it's a ticket. If it is funny, it's a sticky.”"
							})]
						})]
					})
				})]
			})]
		})]
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
function PlayScreen() {
	const backToTitle = useGameStore((s) => s.backToTitle);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-[calc(100dvh-var(--grok-banner-h,0px))] flex-col bg-[var(--color-bg)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex w-full max-w-[1400px] items-center justify-between gap-2 px-3 py-2 sm:px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-[var(--color-subtle)]",
					children: "Tip: drag threads onto empty stations · moderate before running the shift for bonus pay"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: backToTitle,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, {
						className: "size-3.5",
						"aria-hidden": true
					}), "Lobby"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid w-full max-w-[1400px] flex-1 grid-cols-1 gap-3 px-3 pb-4 sm:px-5 lg:grid-cols-12 lg:gap-4 lg:pb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-h-[320px] lg:col-span-4 lg:min-h-0 lg:h-[calc(100dvh-11rem)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeedPanel, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-h-[320px] lg:col-span-4 lg:min-h-0 lg:h-[calc(100dvh-11rem)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseMap, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-h-[360px] lg:col-span-4 lg:min-h-0 lg:h-[calc(100dvh-11rem)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionPanel, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toast, {})
		]
	});
}
function GameShell() {
	const screen = useGameStore((s) => s.screen);
	if (screen === "title") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleScreen, {});
	if (screen === "shift-result") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShiftResult, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayScreen, {});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameShell, {});
}
//#endregion
export { Home as component };
