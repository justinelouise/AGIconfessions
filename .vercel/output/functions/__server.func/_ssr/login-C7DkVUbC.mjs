import { M as require_jsx_runtime, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as signIn, t as Button } from "./client-DpDmp4x-.mjs";
import { t as GROK_PROVIDERS } from "./providers-B-AR6wJz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-C7DkVUbC.js
var import_jsx_runtime = require_jsx_runtime();
function Login() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-[calc(100dvh-var(--grok-banner-h,0px))] place-items-center bg-[var(--color-bg)] bg-grid px-4 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs text-[var(--color-muted)]",
					children: "Thread Course"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 font-display text-xl font-semibold tracking-tight",
					children: "Sign in"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-[var(--color-muted)]",
					children: "Optional — play as guest anytime. Sign in if you want your Grok identity on the badge."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 space-y-2",
					children: GROK_PROVIDERS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "secondary",
						className: "w-full",
						onClick: () => signIn(p.providerId, { callbackURL: "/" }),
						children: ["Continue with ", p.label]
					}, p.providerId))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-5 block text-center text-sm text-[var(--color-accent-dim)] hover:text-[var(--color-accent)]",
					children: "Back to lobby"
				})
			]
		})
	});
}
//#endregion
export { Login as component };
