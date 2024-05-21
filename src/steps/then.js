// @ts-check

const { Then } = require("@wdio/cucumber-framework");
const { expect } = require("@wdio/globals");

const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require("../pageobjects/inventory.page");
const customerdataPage = require("../pageobjects/customerdata.page");
const CheckoutPage = require("../pageobjects/checkout.page");
const CompletePage = require("../pageobjects/complete.page");

const pages = {
  login: LoginPage,
  inventory: InventoryPage,
  checkout: CheckoutPage,
  complete: CompletePage,
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

Then("I should see the cart badge with 2 items", async () => {
  expect(InventoryPage.shoppingCartBadge).toHaveText("2");
});

Then("I should see the products sorted by price from low to high", async () => {
  const items = await InventoryPage.priceItem;
  const actualPrices = await items.map(async (element) =>
    parseFloat((await element.getText()).slice(1))
  );

  expect(actualPrices).toEqual(actualPrices.sort((a, b) => a - b));
});

Then("I should see the customer information filled in", async () => {
  expect(customerdataPage.inputFirstName).toHaveText("John");
  expect(customerdataPage.inputLastName).toHaveText("Doe");
  expect(customerdataPage.inputZipCode).toHaveText("12345");
});
