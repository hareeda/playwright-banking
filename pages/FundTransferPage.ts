import { Page, expect } from '@playwright/test';
import { transferLocators } from '../locators/transferLocators';

export class FundTransferPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async transferFunds(userData : {amount: string, fromAccount: string, toAccount: string}) {
    console.log('🔹 Navigating to Transfer Funds page...');
    await this.page.locator(transferLocators.transferFunds).click();

    console.log('🔹 Filling in transfer details...');
    await this.page.fill(transferLocators.amount, userData.amount);
    // await this.page.selectOption(transferLocators.fromAccountID, userData.fromAccount);
    // await this.page.selectOption(transferLocators.toAccountID, userData.toAccount);

    console.log('🔹 Clicking Transfer button...');
    await this.page.locator(transferLocators.transferButton).click();

    console.log('🔹 Verifying successful transfer...');
    await this.page.waitForSelector(transferLocators.welcomeMsg, { state: 'visible', timeout: 5000 });

    await expect(this.page.locator(transferLocators.welcomeMsg)).toBeVisible();

    console.log('✅ Fund transfer successful!');
  }
}
