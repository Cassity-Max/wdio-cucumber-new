const Page = require("./page");

class CheckoutPage extends Page {
  path = "ccheckout-step-two.html";
  open() {
    return super.open(this.path);
  }

  get btnFinish() {
    return $('//*[@data-test="finish"]');
  }
}

module.exports = new CheckoutPage();
