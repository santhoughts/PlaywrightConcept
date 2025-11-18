const { test, expect } = require("@playwright/test");

test("Video record", async ({ page }) => {
  // login
  await page.goto("https://www.demoblaze.com/");
  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("Sanjeev5252");
  await page.locator("#loginpassword").fill("Test@123");
  await page.locator("//button[text()='Log in']").click();

  // Home page
  await page.waitForSelector("//a[@class='hrefch']");
  const products = await page.$$("//a[@class='hrefch']");
  expect(products).toHaveLength(9);

  // logout
  await page.locator("#logout").click();

  await page.waitForTimeout(5000);
});

// We can manage the trace from the config file and see the error log through the config file
