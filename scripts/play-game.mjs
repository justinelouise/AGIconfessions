import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
page.on("console", (m) => {
  if (m.type() === "error") errors.push(m.text());
});

await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await page.screenshot({ path: "/workspace/screenshots/01-title.png", fullPage: true });

await page.getByRole("button", { name: /open mod queue/i }).click();
await page.waitForTimeout(600);
await page.screenshot({ path: "/workspace/screenshots/02-play.png", fullPage: true });

const mapButtons = page.getByRole("button", { name: /map to course/i });
const count = await mapButtons.count();
for (let i = 0; i < Math.min(2, count); i++) {
  await mapButtons.nth(0).click();
  await page.waitForTimeout(300);
}

const onCourse = page.locator("button").filter({ hasText: "On course" }).first();
if (await onCourse.count()) {
  await onCourse.click();
  await page.waitForTimeout(200);
  const vibe = page.getByRole("button", { name: /vibecheck/i });
  if (await vibe.count()) await vibe.click();
  await page.waitForTimeout(400);
}

await page.screenshot({ path: "/workspace/screenshots/03-mapped.png", fullPage: true });

await page.getByRole("button", { name: /run shift/i }).click();
await page.waitForTimeout(700);
await page.screenshot({ path: "/workspace/screenshots/04-result.png", fullPage: true });

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobile.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await mobile.getByRole("button", { name: /open mod queue/i }).click();
await mobile.waitForTimeout(500);
await mobile.screenshot({ path: "/workspace/screenshots/05-mobile.png", fullPage: true });
const overflow = await mobile.evaluate(() => ({
  scrollWidth: document.documentElement.scrollWidth,
  clientWidth: document.documentElement.clientWidth,
}));

const bodyText = await page.locator("body").innerText();
console.log(JSON.stringify({ errors, overflow, bodySnippet: bodyText.slice(0, 500) }, null, 2));
await browser.close();
