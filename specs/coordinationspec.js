import { test} from '@playwright/test';  
import { orderAssertion } from '../Assertions/coorderAssertion';
import testData from '../utils/testData';
import { loginAsDefaultUser } from '../utils/loginhelper';
import cordination from '../tests/cordination.test';


let coordPage;
let dateHelper;

test.beforeEach(async ({ page }) => {
    await loginAsDefaultUser(page);
});


test('coordination order creation', async ({ page }) => {
    coordPage = await cordination.orderdetails(testData.orderdata.orderName, page);
    const assertorder = new orderAssertion(page);
    await assertorder.assertOrderCreated(testData.orderdata.orderName);
});

