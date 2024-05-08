const Page = require("./page");

class CartPage extends Page {
  path = "cart.html";

  open() {
    return super.open(this.path);
  }

  get itemQuantity() {
    return $$("//div[@data-test='item-quantity']");
  }
}

module.exports = new CartPage();
