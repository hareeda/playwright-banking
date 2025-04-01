import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AccountSummaryPage } from '../pages/AccountSummaryPage';
import { testData } from '../data/testData';

test('Account Summary Verification', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const accountSummaryPage = new AccountSummaryPage(page);
  await page.goto('/');
  await loginPage.login(testData.login);
  await accountSummaryPage.verifyAccountSummary();
});
