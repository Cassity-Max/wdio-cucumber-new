const { Given } = require("@wdio/cucumber-framework");

const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require("../pageobjects/inventory.page");

const pages = {
  login: LoginPage,
  inventory: InventoryPage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});
