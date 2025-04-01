import { Page, expect } from '@playwright/test';
import { accountLocators } from '../locators/accountLocators';

export class AccountSummaryPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyAccountSummary() {
    console.log('🔹 Navigating to Account Summary...');
    await this.page.waitForSelector(accountLocators.accountOverview, { state: 'visible', timeout: 5000 });
    await this.page.locator(accountLocators.accountOverview).click();

    console.log('🔹 Waiting for account summary table to appear...');
    await this.page.waitForSelector(accountLocators.accTable, { state: 'visible', timeout: 10000 });

    console.log('🔹 Verifying account summary table is visible...');
    await expect(this.page.locator(accountLocators.accTable)).toBeVisible();

    console.log('✅ Account Summary verification successful!');
  }
}
