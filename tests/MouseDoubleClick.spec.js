const { test, expect } = require("@playwright/test");

test("Handle double click action", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const doubleClickButton = await page.locator("//button[text()='Copy Text']");

  await doubleClickButton.dblclick();

  const field2 = await page.locator("//input[@id='field2']");

  await expect(field2).toHaveValue("Hello World!");

  await page.waitForTimeout(5000);
});
