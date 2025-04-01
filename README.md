Playwright Banking Automation Framework
This repository contains an end-to-end Playwright automation framework for testing the Parabank web application. The framework is built using Playwright with TypeScript, following the Page Object Model (POM) structure.


📌 Features
Playwright with TypeScript

Page Object Model (POM) implementation

Separate locators for better maintainability

Multiple test flows covering:

User Registration

User Login

Account Summary

Fund Transfer

Bill Payment

Loan Request

Detailed test reports generated after execution

🚀 Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/hareeda/playwright-banking.git
cd playwright-banking
2️⃣ Install Dependencies
npm install
3️⃣ Run Tests
Run all tests:


npx playwright test
Run tests in a specific order:

npx playwright test --workers=1
Run a single test file:

npx playwright test tests/login.test.ts
4️⃣ View Test Reports
After execution, Playwright generates a report. Open it using:

npx playwright show-report
📝 Playwright Configuration (playwright.config.ts)
The Playwright configuration is defined in playwright.config.ts, which includes:

Browser settings (chromium, firefox, webkit)

Headless mode (true/false)

Test timeout settings

Report generation setup

🔹 Test Case Details
Test Case	File Name	Description
User Registration	1_registration.test.ts	Automates the user sign-up process
User Login	login.test.ts	Validates successful login
Account Summary	account-summary.test.ts	Checks if the account summary is displayed correctly
Fund Transfer	fund-transfer.test.ts	Automates fund transfer between accounts
Bill Payment	bill-payment.test.ts	Simulates bill payment transactions
Request Loan	request-loan.test.ts	Tests loan application workflow
📌 Page Object Model (POM)
Each page has a corresponding class in the pages/ directory to encapsulate UI interactions. Example:

Example: LoginPage.ts
typescript
import { Page, expect } from '@playwright/test';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login(username: string, password: string) {
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('//input[@value="Log In"]');
    await expect(this.page.locator('p.smallText b')).toContainText('Welcome');
  }
}
🔹 Running Tests in a Specific Order
To ensure tests run in sequence:

Prefix test files (1_registration.test.ts, 2_login.test.ts, etc.).

Run Playwright with a single worker:

npx playwright test --workers=1
Use Playwright's projects feature in playwright.config.ts for custom execution order.

🎯 Future Enhancements
✅ Add environment support (staging, production)
✅ Implement data-driven testing using JSON/CSV
✅ Integrate with CI/CD pipelines (GitHub Actions, Jenkins)
✅ Add API testing using Playwright’s built-in API capabilities

📧 Support & Contact
For issues, please open a GitHub issue or reach out at hareeda33@gmail.com.

Happy Testing! 🚀🎭


