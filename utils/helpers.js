export class basicdetails {
    constructor(page) {
        this.page = page;
        this.codate = page.locator('label:has-text("Coordinate")').locator('..').locator('.icon-datepicker');
        this.onsite = page.locator('div.field:has-text("Onsite")').locator('.icon-datepicker');
    }
  async cordiate(day = new Date().getDate()) {
    const dialog = this.page.getByRole('dialog');
    await this.codate.click();
    await dialog.getByRole('button', {
      name: String(day + 1),
      exact: true,
    }).click();
    await dialog.waitFor({ state: 'hidden' });
  }

  async onsitedate(day = new Date().getDate()) {
    const dialog = this.page.getByRole('dialog');
    await this.onsite.click();
    await dialog.getByRole('button', {
      name: String(day + 2),
      exact: true,
    }).click();
    await dialog.waitFor({ state: 'hidden' });
  }
}