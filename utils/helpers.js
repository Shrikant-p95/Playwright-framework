export class basicdetails {
    constructor(page) {
        this.page = page;
        this.codate = page.locator('label:has-text("Coordinate")').locator('..').locator('.icon-datepicker');
        this.onsite = page.locator('div.field:has-text("Onsite")').locator('.icon-datepicker');
    }
  async cordiate(day = new Date().getDate()) {
    await this.codate.click();
    const dayCell = this.page.getByRole('dialog').getByRole('button', {
      name: String(day+1),
      exact: true,
    });
    await dayCell.click();
  }

  async onsitedate(day = new Date().getDate()) {
    await this.onsite.click();
    const dayCell = this.page.getByRole('dialog').getByRole('button', {
      name: String(day+2),
      exact: true,
    });
    await dayCell.click();
    await this.page.waitForTimeout(3000);
  }
}