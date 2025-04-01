import { Page, expect } from '@playwright/test';
import { paymentLocators } from '../locators/paymentLocators';

export class BillPaymentPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async payBill(userData: {amount: string, payeeName: string, payeeStreet: string, payeeCity: string, payeeState: string, payeeZip: string, payeePhone: string, payeeAccNum: string}) {
    await this.page.locator(paymentLocators.billPay).click();
    await this.page.fill(paymentLocators.payeeName, userData.payeeName);
    await this.page.fill(paymentLocators.payeeStreet, userData.payeeStreet);
    await this.page.fill(paymentLocators.payeeCity, userData.payeeCity);
    await this.page.fill(paymentLocators.payeeState, userData.payeeState);
    await this.page.fill(paymentLocators.payeeZipcode, userData.payeeZip);
    await this.page.fill(paymentLocators.payeePhoneNum, userData.payeePhone);
    await this.page.fill(paymentLocators.payeeAccountNum, userData.payeeAccNum);
    await this.page.fill(paymentLocators.payeeVerifyAcc, userData.payeeAccNum);
    await this.page.fill(paymentLocators.payeeAmount, userData.amount);
    await this.page.click(paymentLocators.sendPayment);
    await expect(this.page.locator(paymentLocators.successText)).toContainText('Bill Payment Complete');
  }
}
