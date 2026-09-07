import { expect } from '@playwright/test';

export class orderAssertion {
    constructor(page) {
        this.page = page;
        this.searchfield = page.locator("//input[@placeholder='Search']");
        this.searchbutton = page.locator("//button/i[@class='icon-search']");
    }
    async assertOrderCreated(orderName) {
        await this.searchfield.fill(orderName);
        await this.searchbutton.click();
    }

}

