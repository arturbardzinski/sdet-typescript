import { test } from "@playwright/test";
import { HomePage } from "../../pages/home.page";

test("Home page loads", async ({ page }) => {
  const home = new HomePage(page);

  await home.open("https://example.com");
  await home.expectLoaded();
});