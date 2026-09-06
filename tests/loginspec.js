import { test, expect } from '@playwright/test';
import LoginPage from "../Pages/LoginPage.po";
import testData  from "../utils/testData";

test('User can log in', async ({ page }) => {
    const login = new LoginPage(page);
    await page.goto('http://stage.manufacton.com');
    await page.waitForTimeout(3000);
    await login.login(testData.userName, testData.Password);
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL('https://stage.manufacton.com/#/home');
    await page.waitForTimeout(3000);
});