const Page = require("./page");

class InventoryPage extends Page {
  path = "inventory.html";

  open() {
    return super.open(this.path);
  }

  get btnSort() {
    return $('//*[@data-test="product-sort-container"]');
  }

  get productSortLowToHigh() {
    return $('//*[@value="lohi"]');
  }

  get addToCart() {
    return $$('//button[text()="Add to cart"]');
  }

  get priceItem() {
    return $$('//div[@data-test="inventory-item-price"]');
  }
}

module.exports = new InventoryPage();
