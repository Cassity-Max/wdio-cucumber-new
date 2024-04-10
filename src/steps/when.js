const { When } = require("@wdio/cucumber-framework");

const LoginPage = require("../pageobjects/login.page");

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});
