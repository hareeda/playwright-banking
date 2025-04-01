import { Page, expect } from '@playwright/test';
import { loginLocators } from '../locators/loginLocators';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login(userdata: {username: string, password: string}) {
    console.log('🔹 Waiting for login form to load...');
    await this.page.waitForSelector(loginLocators.username, { state: 'visible', timeout: 5000 });

    console.log('🔹 Filling in username & password...');
    await this.page.fill(loginLocators.username, userdata.username);
    await this.page.fill(loginLocators.password, userdata.password);

    console.log('🔹 Clicking the "Log In" button...');
    await this.page.locator(loginLocators.loginButton).click();

    console.log('🔹 Verifying successful login...');
    await this.page.waitForSelector('p.smallText >> text=Welcome', { state: 'visible', timeout: 10000 });

    await expect(this.page.locator(loginLocators.welcomeText)).toContainText('Welcome');

    console.log('✅ Login successful!');
  }
}
