import { Page, expect } from '@playwright/test';
import { loanLocators } from '../locators/loanLocators';

export class RequestLoanPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async loanReqDetails(userData: {loanAmount: string, downPayment: string, fromAccount: string}) {
    console.log('🔹 Navigating to Request Loan page...');
    await this.page.locator(loanLocators.requestLoan).click();

    console.log('🔹 Filling in loan details...');
    await this.page.fill(loanLocators.amount, userData.loanAmount);
    await this.page.fill(loanLocators.downPayment, userData.downPayment);
    // await this.page.selectOption(loanLocators.fromAccountID, userData.fromAccount);

    console.log('🔹 Clicking Apply Now button...');
    await this.page.locator(loanLocators.apply).click();

    console.log('🔹 Waiting for loan approval message...');
    await this.page.waitForSelector(loanLocators.loanApproved, { state: 'visible', timeout: 5000 });

    console.log('🔹 Verifying loan approval...');
    await expect(this.page.locator(loanLocators.expectedText)).toContainText('Congratulations, your loan has been approved.');

    console.log('✅ Loan request successful!');
  }
}
