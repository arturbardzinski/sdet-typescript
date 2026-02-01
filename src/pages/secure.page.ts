import { Page, Locator, expect } from "@playwright/test";

export class SecurePage {
  readonly page: Page;

  // Lokatory
  readonly flashMessage: Locator;
  readonly logoutLink: Locator;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;

    // Na tej stronie komunikaty są w #flash
    this.flashMessage = page.locator("#flash");

    // Link logout ma tekst "Logout"
    this.logoutLink = page.getByRole("link", { name: "Logout" });

    // Nagłówek strony (na /secure jest "Secure Area")
    this.heading = page.locator("h2");
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/\/secure/);
    await expect(this.heading).toHaveText(/Secure Area/i);
  }

  async expectLoginSuccessMessage(): Promise<void> {
    await expect(this.flashMessage).toContainText("You logged into a secure area!");
  }

  async logout(): Promise<void> {
    await this.logoutLink.click();
  }

  async expectLogoutSuccess(): Promise<void> {
    await expect(this.page).toHaveURL(/\/login/);
    await expect(this.flashMessage).toContainText("You logged out of the secure area!");
  }
}