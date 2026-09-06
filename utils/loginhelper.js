// helpers/loginHelper.js
import { LoginPage } from '../Pages/LoginPage.po';
import testData from './testData';
import { Environment } from './env';

export async function loginAsDefaultUser(page) {
    await page.goto(await Environment.getUrl());
    const login = new LoginPage(page);
    await login.loginp(testData.testdata.userName, testData.testdata.Password);
}