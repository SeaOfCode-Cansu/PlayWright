//import { strict } from "assert";
export class SearchResultPage {
  constructor(page) {
    this.page = page; // Assign 'page' to the instance variable.
  }

  async searchProduct() {
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: "networkidle" }),
      this.page.locator("(//input[@name='search'])[1]").fill("iPhone"),
      this.page.locator("//button[text()='Search']").click(),
    ]);
  }
  async addCard() {
    await this.page.hover("//div[@class='image']/a", {
      strict: false,
    });
    await this.page.locator("(//button[@title='Add to Cart'])").nth(0).click();
  }
  async isToastVisible() { 
    const toast = this.page.locator("//a[.='View Cart ']");
    ////div[@class="toast"]//div[@class="toast-header"]
    await toast.waitFor({state:"visible"})
    return toast;
}
}
