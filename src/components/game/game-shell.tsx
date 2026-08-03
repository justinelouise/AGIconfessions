import { useEffect } from "react";
import { PinFinder } from "@/components/game/pin-finder";
import { useGameStore } from "@/lib/game/store";

function Toast() {
  const toast = useGameStore((s) => s.toast);
  const clearToast = useGameStore((s) => s.clearToast);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(clearToast, 3200);
    return () => window.clearTimeout(t);
  }, [toast, clearToast]);

  if (!toast) return null;
  return (
    <div
      role="status"
      className="fixed bottom-4 left-1/2 z-50 w-[min(92vw,28rem)] -translate-x-1/2 rounded-[var(--radius-md)] border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-fg)] shadow-lg"
    >
      {toast}
    </div>
  );
}

/** AGI Confessions generator shell */
export function GameShell() {
  return (
    <>
      <PinFinder />
      <Toast />
    </>
  );
}
