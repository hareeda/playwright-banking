import { test } from '@playwright/test';
import { RegistrationPage } from '../pages/RegistrationPage';
import { testData } from '../data/testData';

test('User Registration', async ({ page }) => {
  const registrationPage = new RegistrationPage(page);
  await page.goto('/');
  await registrationPage.register(testData.registration);
});
