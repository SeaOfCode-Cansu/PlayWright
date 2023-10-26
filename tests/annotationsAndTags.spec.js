import { test, expect } from "@playwright/test";

test.skip("Test will skip", async ({ page }) => {
  await page.goto("https://www.amazon.com/");
});

test("Expected to fail, but passed.", async ({ page }) => {
  test.fail();
});

test.fixme("Test to be fixed", async ({ page }) => {
  await page.goto("https://www.amazon.com/");
});

test("slow test", async ({ page }) => {
  test.slow();
  await page.goto("https://www.amazon.com/");
});

test('skip this test with a condition', async ({ page, browserName }) => {
  test.skip(browserName === 'firefox','Still working on it');
});

//Tags
test('Test full report @smoke', async ({ page }) => {
  await page.goto("https://www.google.com");
});

