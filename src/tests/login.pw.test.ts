import { test } from "@playwright/test";
import { LoginPage } from "../pages/login.page.js";
import { SecurePage } from "../pages/secure.page.js";

test("Login: happy path (valid credentials)", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const securePage = new SecurePage(page);

  await loginPage.open();

  // Dane demo ze strony (the-internet.herokuapp.com): tomsmith / SuperSecretPassword!
  await loginPage.login("tomsmith", "SuperSecretPassword!");

  await securePage.expectLoaded();
  await securePage.expectLoginSuccessMessage();
});

test("Login: negative (invalid username)", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();

  await loginPage.login("wrong_user", "SuperSecretPassword!");

  await loginPage.expectFailure();
});
