import { test } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { SecurePage } from "../pages/secure.page";

test("Login -> Logout (happy path)", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const securePage = new SecurePage(page);

  // 1) Wejście na login
  await loginPage.open();

  // 2) Logowanie
  await loginPage.login("tomsmith", "SuperSecretPassword!");

  // 3) Weryfikacja, że jesteśmy na secure
  await securePage.expectLoaded();
  await securePage.expectLoginSuccessMessage();

  // 4) Logout
  await securePage.logout();

  // 5) Weryfikacja, że wróciliśmy na /login i jest komunikat
  await securePage.expectLogoutSuccess();
});