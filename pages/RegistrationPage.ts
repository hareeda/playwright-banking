import { Page, expect } from '@playwright/test';
import { registrationLocators } from '../locators/registrationLocators';


export class RegistrationPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async register(userData: { firstName: string; lastName: string; username: string; password: string; street: string; city: string; state: string; zipcode: string; ssn: string }) {
    console.log('Navigating to registration page...');
    await this.page.locator(registrationLocators.registerLink).waitFor({ state: 'visible', timeout: 10000 });
    await this.page.locator(registrationLocators.registerLink).click();

    console.log('Filling out registration form...');
    await this.page.fill(registrationLocators.firstName, userData.firstName);
    await this.page.fill(registrationLocators.lastName, userData.lastName);
    await this.page.fill(registrationLocators.street, userData.street);
    await this.page.fill(registrationLocators.city, userData.city);
    await this.page.fill(registrationLocators.state, userData.state);
    await this.page.fill(registrationLocators.zipcode, userData.zipcode);
    await this.page.fill(registrationLocators.ssn, userData.ssn);
    await this.page.fill(registrationLocators.username, userData.username);
    await this.page.fill(registrationLocators.password, userData.password);
    await this.page.fill(registrationLocators.confirmPassword, userData.password);

    console.log('Submitting the registration form...');
    await this.page.locator(registrationLocators.registerButton).waitFor({ state: 'visible', timeout: 5000 });
    await this.page.locator(registrationLocators.registerButton).click();

    console.log('Verifying successful registration...');
    await expect(this.page.locator(registrationLocators.welcomeMessage)).toContainText('Welcome', { timeout: 10000 });

    console.log('✅ Registration successful!');
  }
}
