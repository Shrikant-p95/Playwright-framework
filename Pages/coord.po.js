
export class CoordPage {
  constructor(page) {
    this.page = page;
    this.plusbutton = page.locator('//i[@class="icon-addnew"]');
    this.ordername =  page.locator('//input[@placeholder="Enter name (3 or more characters)"]') ;
    this.module = page.locator('//i[@class="icon-projectplanner is-size-1"]');
    this.cord = page.locator('//span[normalize-space()="Coordination"]');
    this.savebutton = page.locator('//button[normalize-space()="Create Order"]');
    this.codate =  page.locator('label:has-text("Coordinate")').locator('..').locator('.icon-datepicker');
    this.onsitedate = page.locator('div.field:has(> label:text-is("Onsite"))').locator('[role="dialog"]');
    this.createorder = page.locator('//button[normalize-space()="Create Order"]');
  }


  async coord() {
    await this.module.click();
    await this.cord.click();
    await this.plusbutton.click();
    await this.ordername.waitFor({ state: 'visible' });
  }

  async cordiate(orderName, day = new Date().getDate()) {
    await this.ordername.fill(orderName);
    await this.codate.click();
    const dayCell = this.page.getByRole('dialog').getByRole('button', {
      name: String(day+1),
      exact: true,
    });
    await dayCell.click();
    await this.page.waitForTimeout(3000);
  }
   
   async onsitedatefill(day = new Date().getDate()) {
     await this.onsitedate.click();
     const dayCell = this.page.getByRole('dialog').getByRole('button', {
       name: String(day+2),
       exact: true,
     });
     await dayCell.click();
     await this.page.waitForTimeout(3000);
     await this.createorder.click();
     await this.page.waitForTimeout(3000);
   }
   

  
}