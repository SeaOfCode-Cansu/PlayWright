import { test, expect } from "@playwright/test";

test("record demo test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  //using any object property
  await page.click("id=user-name");
  await page.locator("id=user-name").fill("standard_user");

  //using CSS selector
  await page.locator("#password").fill("secret_sauce");

  //using Xpath
  await page.locator('//input[@name="login-button"]').click();

  await page.locator("id=react-burger-menu-btn").click();

  //pausing the test
  await page.pause();

  //using Text
  await page.click('text="Logout"');
});
