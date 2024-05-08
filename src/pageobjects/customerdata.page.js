const Page = require("./page");

class CustomerData extends Page {
  path = "checkout-step-one.html";
  open() {
    return super.open(this.path);
  }

  get inputFirstName() {
    return $('//input[@data-test="firstName"]');
  }

  get inputLastName() {
    return $('//input[@data-test="lastName"]');
  }

  get inputZipCode() {
    return $('//input[@data-test="postalCode"]');
  }

  get btnContinue() {
    return $('//*[@data-test="continue"]');
  }
}

module.exports = new CustomerData();
