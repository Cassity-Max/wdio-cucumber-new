const { When } = require("@wdio/cucumber-framework");

const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require("../pageobjects/inventory.page");
const { backHome } = require("../pageobjects/complete.page");
const { finish } = require("../pageobjects/checkout.page");

const pages = {
  backHome: InventoryPage.backHomebutton,
  finish: InventoryPage.finishButton,
};

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

When("I click on the price low to high", async (sortOrder) => {
  await InventoryPage.productSortContainer.click();
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
  async (firstName, lastName, zipCode) => {
    await InventoryPage.firstName.setValue("John");
    await InventoryPage.lastName.setValue("Doe");
    await InventoryPage.zipCode.setValue("12345");
    await InventoryPage.continueButton.click();
  }
);

When("I click on the {string} button", async (button) => {
  await InventoryPage.finishButton.click();
});

When("I click on the {string} button"),
  async (button) => {
    await InventoryPage.backHomebutton.click();
  };
