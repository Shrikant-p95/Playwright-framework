import { test } from '@playwright/test';
import { CoordPage } from '../Pages/coord.po';  
import testData from '../utils/testData';
import { basicdetails } from '../utils/helpers';
import { loginAsDefaultUser } from '../utils/loginhelper';

let coordPage;
let dateHelper;

test.beforeEach(async ({ page }) => {
    await loginAsDefaultUser(page);
    await page.waitForTimeout(3000);
    coordPage = new CoordPage(page);
    dateHelper = new basicdetails(page);
});


test('coordination order creation', async ({ page }) => {
    await coordPage.coord(testData.orderdata.orderName);
    await dateHelper.cordiate(testData.orderdata.day);
    await dateHelper.onsitedate(testData.orderdata.day);
    await coordPage.ordercreate();
});




