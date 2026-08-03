/** $AGI — Anime Girlfriend Intelligence (public ticker + CA for easy copy). */

export const AGI_TOKEN = {
  ticker: "$AGI",
  name: "Anime Girlfriend Intelligence",
  ca: "4VKS1SjqeGGVHAAg1eJyR9nTHSEj62KAuSj7Zapcpump",
} as const;

export function formatCaBlock(): string {
  return `${AGI_TOKEN.ticker} · ${AGI_TOKEN.name}\nCA: ${AGI_TOKEN.ca}`;
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}
