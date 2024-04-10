const { $ } = require("@wdio/globals");
const Page = require("./page");

class LoginPage extends Page {
  path = "";

  open() {
    return super.open(this.path);
  }

  get inputUsername() {
    return $('//input[@data-test="username"]');
  }

  get inputPassword() {
    return $('//input[@data-test="password"]');
  }

  get btnSubmit() {
    return $('//*[@data-test="login-button"]');
  }

  get errorAlert() {
    return $('//*[@data-test="error"]');
  }

  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }
}

module.exports = new LoginPage();
