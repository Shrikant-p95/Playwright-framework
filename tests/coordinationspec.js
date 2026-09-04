import { CoordPage } from '../Pages/coord.po';
import testData from '../utils/testData';   
import { test } from '@playwright/test';
import LoginPage from '../Pages/LoginPage.po';


test('coordination order creation', async ({ page }) => {
    await page.goto('http://stage.manufacton.com');
    const login = new LoginPage(page);
    await login.login(testData.testdata.userName, testData.testdata.Password);
    const coordPage = new CoordPage(page);
    await coordPage.coord();
    await coordPage.cordiate(testData.orderdata.orderName, testData.orderdata.day);
    await coordPage.onsitedatefill(testData.orderdata.day);
});




