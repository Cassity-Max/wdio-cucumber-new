const Page = require("./page");

class Complete extends Page {
  path = "checkout-complete.html";
  open() {
    return super.open(this.path);
  }

  get backHome() {
    return $('//*[@data-test="back-to-products"]');
  }
}

module.exports = new Complete();
