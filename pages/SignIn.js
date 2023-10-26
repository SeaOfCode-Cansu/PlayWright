exports.SignInPage = class SignIn {
  constructor(page) {
    this.page = page;
  }
  async signIn(email,password){
    await this.gotoSignInPage();
    await this.enterLoginEmail(email);
    await this.enterLoginPassword(password);
    await this.clickLoginBtn();
  }
  async gotoSignInPage() {
    await this.page.goto(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
    );
  }
  async enterLoginEmail(emailAddress) {
    await this.page.locator("//input[@id='input-email']").fill(emailAddress);
  }
  async enterLoginPassword(password) {
    await this.page.locator("id=input-password").fill(password);
  }
  async clickLoginBtn() {
    await Promise.all([
      this.page.waitForNavigation(),
      await this.page.click(" //input[@value='Login']"),
    ]);
  }
};
