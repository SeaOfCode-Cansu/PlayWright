exports.AmazonPage = class AmazonPage {
  constructor(page) {
    this.page = page;
    this.searchBox = page.locator("id=twotabsearchtextbox");
    this.productName = page.locator(".a-size-large .a-color-base");
    this.productPrice = page.locator(".a-price-whole");
    this.productFeatures = page.locator(".a-unordered-list.a-horizontal.a-spacing-base");
    this.productDescription = page.locator(".a-text-center.a-size-large");
    this.inStock = page.locator(".a-icon-prime");
  }

  async goto() {
    await this.page.goto("https://www.amazon.com.tr/");
  }

  async search(keyword) {
    await this.searchBox.fill(keyword);
    await this.page.locator("#nav-search-submit-button").click();
  }
 /* // Ürünleri indexler
  async getProducts() {
    const products = await this.page.querySelectorAll('.s-result-item');
    return products;
  }

  // Ürüne tıklar
  async clickProduct(index) {
    const product = (await this.getProducts())[index];
    await product.click();
  }
  */
/*
  async selectProductByIndex(index) {
    const elements = await this.productTitle.evaluate();
    const element = elements[index];
    await element.click();
  } */

    /*const itemSelector = `.s-main-slot .s-result-item:nth-child(${index + 1}) .s-title-instructions span`;
    await this.page.click(itemSelector);
    await this.page.waitForLoadState('domcontentloaded'); */
 
    /*const productElements = await this.page.locator('.s-main-slot .s-result-item');
    if (i < productElements.count()) {
      await productElements.nth(i).click();
    } else {
      throw new Error(`Product at index ${i} not found.`);
    }*/
    /*const productElement = await this.page.locator(".s-result-item").nth(i);
    await this.page.waitForSelector(".s-result-item");
    await productElement.click(); */
    //await this.page.locator(".s-result-item").nth(i).click();


  
  getProductName() {
    return this.page.textContent(this.productName);
  }

  getProductPrice() {
    return this.page.textContent(this.productPrice);
  }

  getProductFeatures() {
    return this.page.textContent(this.productFeatures);
  }

  getProductDescription() {
    return this.page.textContent(this.productDescription);
  }

  isInStock() {
    return this.page.isVisible(this.inStock);
  }
};
  