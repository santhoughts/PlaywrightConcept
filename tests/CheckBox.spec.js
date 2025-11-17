const { test, expect } = require("@playwright/test");

test("Handle checkbox", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/checkboxes");

  const checkbox1 = await page.locator("(//input[@type= 'checkbox'])[1]");
  const checkbox2 = await page.locator("(//input[@type= 'checkbox'])[2]");

  await checkbox1.check();
  // await page.check("//input[@type= 'checkbox'])[1]");

  await expect(checkbox1).toBeChecked();
  await expect(checkbox1.isChecked()).toBeTruthy(); // return true for checkbox1

  await page.waitForTimeout(5000);
  if (await checkbox2.isChecked()) {
    await checkbox2.uncheck();
  }
  await page.waitForTimeout(5000);

  await expect(checkbox2.isChecked()).toBeFalsy(); // return false for checkbox2 after uncheck the checkbox
});
