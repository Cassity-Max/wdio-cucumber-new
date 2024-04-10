const Page = require("./page");

class InventoryPage extends Page {
  path = "inventory.html";

  open() {
    return super.open(this.path);
  }
}

module.exports = new InventoryPage();
