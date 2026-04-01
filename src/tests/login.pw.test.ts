import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page.js";

test("Login: happy path (valid credentials)", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();

  // Dane są podane na stronie jako poprawne:
  // username: tomsmith
  // password: SuperSecretPassword!
  // (źródło: opis strony)  [oai_citation:1‡the-internet.herokuapp.com](https://the-internet.herokuapp.com/login?utm_source=chatgpt.com)
  await loginPage.login("tomsmith", "SuperSecretPassword!");

  await loginPage.expectSuccess();

  // Dodatkowa asercja: po zalogowaniu URL zawiera /secure
  await expect(page).toHaveURL(/\/secure/);
});

test("Login: negative (invalid username)", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();

  await loginPage.login("wrong_user", "SuperSecretPassword!");

  await loginPage.expectFailure();
});
