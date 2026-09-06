
export class CoordPage {
  constructor(page) {
    this.page = page;
    this.plusbutton = page.locator('//i[@class="icon-addnew"]');
    this.ordername =  page.locator('//input[@placeholder="Enter name (3 or more characters)"]') ;
    this.module = page.locator('//i[@class="icon-projectplanner is-size-1"]');
    this.cord = page.locator('//span[normalize-space()="Coordination"]');
    this.createorder = page.locator('//button[normalize-space()="Create Order"]');
    this.orderCreateButton = page.locator('button:has-text("Create Order")');
    
  }


  async coord(orderName) {
    await this.module.click();
    await this.cord.click();
    await this.plusbutton.click();
    await this.ordername.fill(orderName);
  } 
  async ordercreate(){
    await this.orderCreateButton.click();
  }
 
};