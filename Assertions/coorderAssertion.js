import { expect } from '@playwright/test';

export class orderAssertion {
    constructor(page) {
        this.page = page;
        this.searchfield = page.locator("//input[@placeholder='Search']");
        this.searchbutton = page.locator("//button/i[@class='icon-search']");
    }

    async assertOrderCreated(orderName) {
        const orderLink = this.page.getByRole('link', { name: orderName, exact: true }).first();
        await this.searchfield.fill(orderName);
        await this.searchbutton.click();// Wait for search results to load
        await expect(orderLink).toBeVisible({ timeout: 20000 });
    }
}


