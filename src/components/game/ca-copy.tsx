import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AGI_TOKEN, copyToClipboard, formatCaBlock } from "@/lib/game/token";

type Variant = "bar" | "card" | "compact" | "footer";

export function CaCopy({
  variant = "bar",
  onCopied,
  className,
}: {
  variant?: Variant;
  onCopied?: (msg: string) => void;
  className?: string;
}) {
  const [copied, setCopied] = useState<"ca" | "block" | null>(null);

  const flash = (kind: "ca" | "block", msg: string) => {
    setCopied(kind);
    onCopied?.(msg);
    window.setTimeout(() => setCopied(null), 1600);
  };

  const copyCa = async () => {
    const ok = await copyToClipboard(AGI_TOKEN.ca);
    if (ok) flash("ca", "CA copied.");
    else onCopied?.("Copy failed — select the CA manually.");
  };

  const copyBlock = async () => {
    const ok = await copyToClipboard(formatCaBlock());
    if (ok) flash("block", "Ticker + CA copied.");
    else onCopied?.("Copy failed — select the CA manually.");
  };

  // Small support box at the bottom — easy to read, one-tap copy
  if (variant === "footer") {
    return (
      <footer className={cn("px-3 pb-4 pt-1 sm:px-5", className)}>
        <div className="mx-auto max-w-[1100px]">
          <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3 py-2.5 sm:px-3.5 sm:py-3">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-[var(--color-fg)] sm:text-[13px]">
                  Support our Project on Solana
                </p>
                <p className="mt-0.5 text-[10px] text-[var(--color-subtle)]">
                  {AGI_TOKEN.ticker} · {AGI_TOKEN.name}
                </p>
              </div>
              <button
                type="button"
                onClick={copyCa}
                className={cn(
                  "flex min-w-0 items-center gap-2 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg)] px-2.5 py-1.5 text-left transition-colors",
                  "hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-hover)]",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-link)]",
                )}
                title="Copy CA"
                aria-label="Copy contract address"
              >
                <span className="min-w-0 flex-1 truncate font-mono text-[11px] leading-none text-[var(--color-fg)] sm:text-xs">
                  {AGI_TOKEN.ca}
                </span>
                <span className="inline-flex shrink-0 items-center gap-1 text-[11px] font-medium text-[var(--color-muted)]">
                  {copied === "ca" ? (
                    <>
                      <Check className="size-3.5 text-emerald-400" aria-hidden />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5" aria-hidden />
                      Copy
                    </>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  if (variant === "compact") {
    return (
      <button
        type="button"
        onClick={copyCa}
        className={cn(
          "inline-flex max-w-full items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 text-left font-mono text-[10px] text-[var(--color-muted)] transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]",
          className,
        )}
        title="Copy $AGI CA"
      >
        {copied === "ca" ? (
          <Check className="size-3 shrink-0 text-[var(--color-karma)]" aria-hidden />
        ) : (
          <Copy className="size-3 shrink-0" aria-hidden />
        )}
        <span className="text-[var(--color-accent-dim)]">{AGI_TOKEN.ticker}</span>
        <span className="truncate">{AGI_TOKEN.ca}</span>
      </button>
    );
  }

  if (variant === "card") {
    return (
      <div
        className={cn(
          "rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-3",
          className,
        )}
      >
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="font-display text-sm font-semibold tracking-tight">
              {AGI_TOKEN.ticker}{" "}
              <span className="font-sans text-xs font-normal text-[var(--color-muted)]">
                {AGI_TOKEN.name}
              </span>
            </p>
            <p className="mt-1 break-all font-mono text-[11px] leading-relaxed text-[var(--color-fg)]">
              {AGI_TOKEN.ca}
            </p>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <Button size="sm" onClick={copyCa}>
            {copied === "ca" ? (
              <Check className="size-3.5" aria-hidden />
            ) : (
              <Copy className="size-3.5" aria-hidden />
            )}
            Copy CA
          </Button>
          <Button size="sm" variant="secondary" onClick={copyBlock}>
            {copied === "block" ? (
              <Check className="size-3.5" aria-hidden />
            ) : (
              <Copy className="size-3.5" aria-hidden />
            )}
            Copy ticker + CA
          </Button>
        </div>
      </div>
    );
  }

  // bar
  return (
    <div
      className={cn(
        "flex flex-col gap-2 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)]/90 px-3 py-2 sm:flex-row sm:items-center sm:gap-3",
        className,
      )}
    >
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-medium uppercase tracking-wider text-[var(--color-subtle)]">
          {AGI_TOKEN.ticker} · {AGI_TOKEN.name}
        </p>
        <p className="mt-0.5 truncate font-mono text-xs text-[var(--color-fg)] sm:text-[13px]">
          {AGI_TOKEN.ca}
        </p>
      </div>
      <div className="flex shrink-0 gap-1.5">
        <Button size="sm" onClick={copyCa}>
          {copied === "ca" ? (
            <Check className="size-3.5" aria-hidden />
          ) : (
            <Copy className="size-3.5" aria-hidden />
          )}
          Copy CA
        </Button>
      </div>
    </div>
  );
}
