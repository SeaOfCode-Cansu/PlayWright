exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.userName_textBox = page.getByLabel("Username");
    this.password_textBox = page.getByLabel("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
  }

  async gotoLoginPage(){
    await this.page.goto("https://the-internet.herokuapp.com/login");
  }

  async login(username, password){
    await this.userName_textBox.fill(username);
    await this.password_textBox.fill(password);
    await this.loginButton.click();
  }
}
