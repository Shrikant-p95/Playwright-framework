export class basicdetails {
    constructor(page) {
        this.page = page;
        this.codate = page.locator('label:has-text("Coordinate")').locator('..').locator('.icon-datepicker');
        this.onsite = page.locator('div.field:has-text("Onsite")').locator('.icon-datepicker');
    }
  
  async dateselector(dateKind="",dayOffset = 0, cordiateDayOffset = 0 ) {
    const day = new Date().getDate();
    // Ensure onsitedate >= cordiate date
    const finalDayOffset = dayOffset + cordiateDayOffset;
    const dialog = this.page.getByRole('dialog');
    if(dateKind === "onsite") {
    await this.onsite.click();
  } else if(dateKind === "coord") { 
    await this.codate.click();
  }
    await dialog.getByRole('button', {
      name: String(day + finalDayOffset),
      exact: true,
    }).click();
    await dialog.waitFor({ state: 'hidden' });
  }
}