import { test, expect } from "@playwright/test";
import { chromium } from "@playwright/test";

test("Slow motion and video recording", async () => {
  // Launch browser
  const browser = await chromium.launch();
  // Create a new incognito browser context
  const context = await browser.newContext();
  // Create a new page inside context.
  const page = await context.newPage();
  await page.goto("https://google.com");
  // Dispose context once it's no longer needed.
  await context.close();
});
