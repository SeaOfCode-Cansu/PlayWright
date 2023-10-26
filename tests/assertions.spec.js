import { test, expect } from "@playwright/test";

test("Assertions", async ({ page }) => {
  await page.goto("https://kitchen.applitools.com/");
  //ASSERTIONS
  //Check element present or not
  await expect(page.locator("text=The Kitchen")).toHaveCount(1);
  await page.pause();

  //check element is hidden or visible
  await expect(page.locator("text=The Kitchen")).toBeVisible();
  await expect.soft(page.locator("text=The Kitchen")).toBeHidden();

  //check element is enabled or disabled
  await expect(page.locator("text=The Kitchen")).toBeEnabled();
  await expect.soft(page.locator("text=The Kitchen")).toBeDisabled();

  //check text matches value or not
  await expect(page.locator("text=The Kitchen")).toHaveText("The Kitchen");
  await expect(page.locator("text=The Kitchen")).not.toHaveText("ABC");

  //check attribute value
  await expect(page.locator("text=The Kitchen")).toHaveAttribute("class","chakra-heading css-dpmy2a");
  await expect(page.locator("text=The Kitchen")).toHaveAttribute("class",/.*css-dpmy2a/);

  //check page url and title
  await expect(page).toHaveURL("https://kitchen.applitools.com/");
  await expect(page).toHaveURL(/kitchen.applitools.com/);
  await expect(page).toHaveTitle(/.*Kitchen/);

  //visual validation with screenshot
  await expect(page).toHaveScreenshot();
});
