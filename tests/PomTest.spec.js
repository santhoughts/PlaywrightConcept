import { test, expect } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";

test("test", async ({ page }) => {
  // Login
  const loginPage = new LoginPage(page);
  await loginPage.launchURL();
  await loginPage.login("Sanjeev5252", "Test@123");
  await page.waitForTimeout(5000);

  // HomePage
  const homePage = new HomePage();
  homePage.addProductToCart("Samsung galaxy s6");
  homePage.gotoCart();
});
