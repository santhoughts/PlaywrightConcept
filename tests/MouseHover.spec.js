const { test, expect } = require("@playwright/test");

test("Handle mouse hover action", async ({ page }) => {
  await page.goto("http://demo.opencart.com/");

  const desktop = await page.locator("//*[@id='narbar-menu']/ul/li[1]/a");

  const macBook = await page.locator(
    "//*[@id='narbar-menu']/ul/li[1]/div/div/ul/li[2]/a"
  );

  await desktop.hover();
  await macBook.hover();

  await page.waitForTimeout(5000);
});
