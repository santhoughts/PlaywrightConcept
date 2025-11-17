const { test, expect } = require("@playwright/test");

test("Handle mouse hover action", async ({ page }) => {
  await page.goto("http://demo.opencart.com/");

  const button = await page.locator("//*[@id='narbar-menu']/ul/li[1]/a");

  // perform right  click
  await button.click({ button: "right" });

  await page.waitForTimeout(5000);
});
