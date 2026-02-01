import { Page, Locator, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  // Lokatory
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly flashMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator('button[type="submit"]');
    this.flashMessage = page.locator("#flash");
  }

  async open(): Promise<void> {
    await this.page.goto("/login");
    await expect(this.usernameInput).toBeVisible();
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectSuccess(): Promise<void> {
    await expect(this.flashMessage).toContainText("You logged into a secure area!");
  }

  async expectFailure(): Promise<void> {
    await expect(this.flashMessage).toBeVisible();
    await expect(this.flashMessage).toContainText("Your username is invalid!");
  }
}