import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { FundTransferPage } from '../pages/FundTransferPage';
import { testData } from '../data/testData';

test('Fund Transfer', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const fundTransferPage = new FundTransferPage(page);
  await page.goto('/');
  await loginPage.login(testData.login);
  await fundTransferPage.transferFunds(testData.fundTransfer);
});
