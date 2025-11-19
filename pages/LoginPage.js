exports.LoginPage = class LoginPage {
  // constructor
  constructor(page) {
    this.page = page;
    this.loginLink = "#login2";
    this.usernameInput = "#loginusername";
    this.passwordInput = "#loginpassword";
    this.loginButton = "//button[text()='Log in']";
  }
  // launch the page
  async launchURL() {
    await this.page.goto("https://www.demoblaze.com/");
  }

  // Fill the details and login into application

  async login(userName, password) {
    await this.page.locator(this.loginLink).click();
    await this.page.locator(this.usernameInput).fill(userName);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
  }
};
