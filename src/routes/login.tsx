import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  return (
    <main className="grid min-h-[calc(100dvh-var(--grok-banner-h,0px))] place-items-center bg-[var(--color-bg)] px-4 py-10">
      <div className="w-full max-w-sm rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6">
        <p className="font-mono text-xs text-[var(--color-muted)]">AGI Confessions</p>
        <h1 className="mt-1 font-display text-xl font-semibold tracking-tight">Sign in</h1>
        <p className="mt-2 text-sm text-[var(--color-muted)]">
          Optional — use the generator anytime. Sign in only if you want a saved identity.
        </p>
        <div className="mt-5 space-y-2">
          {authEnabled ? (
            GROK_PROVIDERS.map((p) => (
              <Button
                key={p.providerId}
                type="button"
                variant="secondary"
                className="w-full"
                onClick={() => signIn(p.providerId, { callbackURL: "/" })}
              >
                Continue with {p.label}
              </Button>
            ))
          ) : (
            <p className="text-sm text-[var(--color-muted)]">Sign-in is disabled.</p>
          )}
        </div>
        <Link
          to="/"
          className="mt-5 block text-center text-sm text-[var(--color-link)] hover:underline"
        >
          Back to confessions
        </Link>
      </div>
    </main>
  );
}
