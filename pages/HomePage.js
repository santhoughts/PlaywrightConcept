exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.productList = "h4.card-title a";
    this.addToCartBtn = "//a[text()='Add to cart']";
    this.cartLink = "cartur";
  }

  async addProductToCart(productName) {
    const products = await this.page.$$(this.productList);
    for (const product of products) {
      if (productName === (await product.textContent())) {
        await product.click();
        break;
      }
    }

    await this.page.on("dialog", async (dialog) => {
      if (dialog.message().includes("added")) {
        await dialog.accept();
      }
    });

    await this.page.locator(this.addToCartBtn).click();
  }

  async gotoCart() {
    await this.page.locator(this.cartLink).click();
  }
};
