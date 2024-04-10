const { Then } = require("@wdio/cucumber-framework");
const { expect } = require("@wdio/globals");

const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require("../pageobjects/inventory.page");

const pages = {
  login: LoginPage,
  inventory: InventoryPage,
};

Then(
  /^I should see an error message on the login page saying (.*)$/,
  async (message) => {
    expect(LoginPage.errorAlert).toHaveText(expect.stringContaining(message));
  }
);

Then(/^I should be redirected to the (\w+) page$/, async (page) => {
  await expect(browser).toHaveUrl(expect.stringContaining(pages[page].path));
});
