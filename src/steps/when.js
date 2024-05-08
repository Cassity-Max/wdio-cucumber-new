const { When } = require("@wdio/cucumber-framework");

const LoginPage = require("../pageobjects/login.page");

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

When(/^I see (\w+)$/, async ()=>{
  await console.log("sort"); // Add a valid expression after the 'await' statement
});