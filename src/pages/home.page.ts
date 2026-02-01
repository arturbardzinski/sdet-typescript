import { Page, Locator, expect } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole("heading");
  }

  async open(baseUrl = "https://example.com"): Promise<void> {
    await this.page.goto(baseUrl);
  }

  async expectLoaded(): Promise<void> {
    await expect(this.heading).toBeVisible();
  }
}