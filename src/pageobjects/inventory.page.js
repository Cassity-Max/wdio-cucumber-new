const Page = require("./page");

class InventoryPage extends Page {
  path = "inventory.html";

  open() {
    return super.open(this.path);
  }

  get btnSort() {
    return $('//*[@data-test="product_sort_container"]');
  }

  get productSortLowToHigh() {
    return $('//*[@value="lohi"]');
  }

  get addToCart() {
    return $$('//button[text()="Add to cart"]');
  }
}

module.exports = new InventoryPage();
