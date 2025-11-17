const { test, expect } = require("@playwright/test");

test("Handle multiDropDown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Select multiple options from the dropdown
  await page.selectOption("#colors", ["Red", "Blue", "Yellow"]);

  // Assertions
  // check number of options in dropdown
  const options = await page.locator("#colors option");
  await expect(options).toHaveCount(5);

  // check number of options using locatars $$, it returns in the form of array
  const options2 = await page.$$("#colors option");
  console.log("Number of options : ", options2.length);
  await expect(options2.length).toBe(5);

  // check persence of content in dropdown
  const content = await page.locator("#colors").textContent();
  await expect(content.includes("Blue")).toBeTruthy();

  await page.waitForTimeout(5000);
});
