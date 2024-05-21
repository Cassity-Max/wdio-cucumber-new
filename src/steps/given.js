// @ts-check

const { Given } = require("@wdio/cucumber-framework");

const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require("../pageobjects/inventory.page");
const customerdataPage = require("../pageobjects/customerdata.page");
const checkoutPage = require("../pageobjects/checkout.page");
const completePage = require("../pageobjects/complete.page");

const pages = {
  login: LoginPage,
  inventory: InventoryPage,
  customerdata: customerdataPage,
  checkout: checkoutPage,
  complete: completePage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});
