import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { BillPaymentPage } from '../pages/BillPaymentPage';
import { testData } from '../data/testData';

test('Bill Payment', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const billPaymentPage = new BillPaymentPage(page);
  await page.goto('/');
  await loginPage.login(testData.login);
  await billPaymentPage.payBill(testData.payment);
});
