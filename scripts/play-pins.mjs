import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });

await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await page.screenshot({ path: "/workspace/screenshots/pins-01-title.png", fullPage: true });

await page.getByRole("button", { name: /open pin finder/i }).click();
await page.waitForTimeout(500);
await page.screenshot({ path: "/workspace/screenshots/pins-02-finder.png", fullPage: true });

// click a format filter
await page.getByRole("button", { name: /^X post$/i }).click();
await page.waitForTimeout(300);

// surprise me
await page.getByRole("button", { name: /surprise me/i }).click();
await page.waitForTimeout(400);

// copy post
await page.getByRole("button", { name: /copy post/i }).click();
await page.waitForTimeout(300);

// save
const save = page.getByRole("button", { name: /save to queue/i });
if (await save.count()) await save.click();
await page.waitForTimeout(200);

// pin queue tab
await page.getByRole("button", { name: /pin queue/i }).click();
await page.waitForTimeout(300);
await page.screenshot({ path: "/workspace/screenshots/pins-03-queue.png", fullPage: true });

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobile.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await mobile.getByRole("button", { name: /open pin finder/i }).click();
await mobile.waitForTimeout(400);
await mobile.screenshot({ path: "/workspace/screenshots/pins-04-mobile.png", fullPage: true });
const overflow = await mobile.evaluate(() => ({
  scrollWidth: document.documentElement.scrollWidth,
  clientWidth: document.documentElement.clientWidth,
}));

const text = await page.locator("body").innerText();
console.log(JSON.stringify({ errors, overflow, hasCopy: text.includes("Copy"), snippet: text.slice(0, 350) }, null, 2));
await browser.close();
