exports.RegisterPage = class RegisterPage {
  constructor(page) {
    this.page = page; 
  }

  async gotoRegisterPage() {
    await this.page.goto(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/register"
    );
  }
  async enterFirstName(firstName) {
    await this.page.locator("#input-firstname").fill(firstName);
  }
  async enterLastName(lastName) {
    await this.page.locator("input[name='lastname']").fill(lastName);
  }
  async enterEmail(email) {
    await this.page.locator("//input[@id='input-email']").fill(email);
  }
  async enterTelephone(phone) {
    await this.page.locator("#input-telephone").fill(phone);
  }
  async enterPassword(password) {
    await this.page.locator("//input[@id='input-password']").fill(password);
  }
  async enterConfirmedPassword(password) {
    await this.page.locator("//input[@name='confirm']").fill(password);
  }
  async isSubcribeChecked() {
    const subscribeCheckboxElement = await this.page.locator("#input-newsletter-no");
    return subscribeCheckboxElement;
  }
  async clickTermandCondition() {
    await this.page.click("//label[@for='input-agree']");
  }
  async clickContinueToRegister() {
    await Promise.all([
      this.page.waitForNavigation({waitUntill:"networkidle"}),
      this.page.click("input[value='Continue']")
    ])
  }
};
