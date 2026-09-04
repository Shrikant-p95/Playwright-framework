import { CoordPage } from '../Pages/coord.po';
import testData from '../utils/testData';   
import { test } from '@playwright/test';
import LoginPage from '../Pages/LoginPage.po';

test('login', async ({ page }) => {
    await page.goto('http://stage.manufacton.com');
    const login = new LoginPage(page);
    await login.login(testData.testdata.userName, testData.testdata.Password);
    await page.waitForTimeout(3000);
    const coordPage = new CoordPage(page);
    await coordPage.coord(testData.orderdata.orderName);
    await page.waitForTimeout(3000);
});




