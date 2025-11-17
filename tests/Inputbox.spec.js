const { test, expect } = require("@playwright/test");

test("InputboxHandle", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/inputs");

  // inputbox condition
  const inputLocator = await page.locator("input[type='number']");

  await expect(inputLocator).toBeVisible();
  await expect(inputLocator).toBeEditable();
  await expect(inputLocator).toBeEmpty();
  await expect(inputLocator).toBeEnabled();

  //await page.locator("input[type='number']").fill("22222");
  //await page.fill("input[type='number']", "22222");
  await inputLocator.fill("55555");

  await page.waitForTimeout(5000);
});
