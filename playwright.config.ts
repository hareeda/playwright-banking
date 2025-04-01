import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    browserName: 'chromium',
    headless: false,
    baseURL: 'https://parabank.parasoft.com/parabank/index.htm',
    screenshot: 'only-on-failure',
    trace: 'on',
  },
  reporter: [['html'], ['allure-playwright']],
});
