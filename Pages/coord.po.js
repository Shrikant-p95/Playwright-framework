

export class CoordPage {
  constructor(page) {
    this.page = page;
    this.plusbutton = page.locator('//i[@class="icon-addnew"]');
    this.ordername =  page.locator('//input[@placeholder="Enter name (3 or more characters)"]') ;
    this.module = page.locator('//i[@class="icon-projectplanner is-size-1"]');
    this.cord = page.locator('//span[normalize-space()="Coordination"]');
  }

  async coord(orderName) {
    await this.module.click();
    await this.page.waitForTimeout(3000);
    await this.cord.click();
    await this.page.waitForTimeout(3000);
    await this.plusbutton.click();
    await this.page.waitForTimeout(3000);
    await this.ordername.fill(orderName);
    await this.page.waitForTimeout(3000);
  }
}