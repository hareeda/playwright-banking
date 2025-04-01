import {test} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RequestLoanPage } from '../pages/RequestLoanPage';
import { testData } from '../data/testData';

test('Bill Payment', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const requestLoanPage = new RequestLoanPage(page);
  await page.goto('/');
  await loginPage.login(testData.login);
  await requestLoanPage.loanReqDetails(testData.loanRequest);
});
