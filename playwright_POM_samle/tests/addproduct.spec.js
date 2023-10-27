import { test, expect } from "@playwright/test";
import { RegisterPage } from "../../pages/registerPage";
import { SignInPage } from "../../pages/SignIn";
import { HomePage } from "../../pages/HomePage";
import { SearchResultPage } from "../../pages/searchResultPage";

const email = "test123ttt61t@gmail.com";
const password = "Deniz@123";
test.describe("Add a product to card after register&login user", async () => {
  test("Register a user", async ({page}) => {
    const register = new RegisterPage(page);

    await register.gotoRegisterPage();
    await register.enterFirstName("Deniz");
    await register.enterLastName("Test");
    await register.enterEmail(email);
    await register.enterTelephone("1234567890");
    await register.enterPassword(password);
    await register.enterConfirmedPassword(password);
    const subscribeCheckboxLocator = await register.isSubcribeChecked();
    await expect(subscribeCheckboxLocator).toBeChecked();
    await register.clickTermandCondition();
    await register.clickContinueToRegister();
  });
  test("Sign user in", async ({ page }) => {
    const signIn = new SignInPage(page);

    await signIn.gotoSignInPage();
    await signIn.enterLoginEmail(email);
    await signIn.enterLoginPassword(password);
    await signIn.clickLoginBtn();
    expect(await page.title()).toBe("My Account");
  });

  test("Add a product to the card", async ({ page }) => {
    const signIn = new SignInPage(page);
    const homePage = new HomePage(page);
    const searchResultPage = new SearchResultPage(page);
    await signIn.signIn(email, password);
    await searchResultPage.searchProduct();
    await searchResultPage.addCard();
    const isCardVisible = await searchResultPage.isToastVisible();
    expect(isCardVisible).toBeVisible();
    });
});
