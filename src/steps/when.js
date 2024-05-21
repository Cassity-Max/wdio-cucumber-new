// @ts-check

const { When } = require("@wdio/cucumber-framework");

const CheckoutPage = require("../pageobjects/checkout.page");
const CompletePage = require("../pageobjects/complete.page");
const CustomerDataPage = require("../pageobjects/customerdata.page");
const InventoryPage = require("../pageobjects/inventory.page");
const LoginPage = require("../pageobjects/login.page");


When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

When("I click on the price low to high", async () => {
  await InventoryPage.btnSort.click();
  await InventoryPage.productSortLowToHigh.click();
});

When(
  "I click on the add to cart button for the first two products",
  async () => {
    await InventoryPage.addToCart[0].click();
    await InventoryPage.addToCart[1].click();
  }
);

When(
  "I enter the customer information",
  async () => {
    await CustomerDataPage.inputFirstName.setValue("John");
    await CustomerDataPage.inputLastName.setValue("Doe");
    await CustomerDataPage.inputZipCode.setValue("12345");
  }
);

const pages = {
  login: LoginPage,
  inventory: InventoryPage,
  customerdata: CustomerDataPage,
  checkout: CheckoutPage,
  complete: CompletePage,
};

When(
  "I click on the {string} button on the {string} page",
 async (button, page) => {
   await pages[page][button].click();
  }
);
