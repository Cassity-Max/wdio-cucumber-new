const Page = require("./page");

class CheckoutPage extends Page {
  path = "checkout-step-two.html";
  open() {
    return super.open(this.path);
  }

  get finish() {
    return $('//button[@data-test="finish"]');
  }
}

module.exports = new CheckoutPage();
