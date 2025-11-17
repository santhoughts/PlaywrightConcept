const { test, expect } = require("@playwright/test");

test("Verify HomePage", async ({ page }) => {
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
  await page.locator("#logout2").click();

  await page.waitForTimeout(5000);
});

test("Verify  Add to cart", async ({ page }) => {
  // login
  await page.goto("https://www.demoblaze.com/");
  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("Sanjeev5252");
  await page.locator("#loginpassword").fill("Test@123");
  await page.locator("//button[text()='Log in']").click();

  // Add to cart
  await page.locator("//a[text()='Samsung galaxy s6']").click();
  await page.locator("//a[text()='Add to cart']").click();

  page.on("dialog", async (dialog) => {
    await expect(dialog.message()).toContain("Product added.");
    await dialog.accept();
  });

  // logout
  await page.locator("#logout2").click();

  await page.waitForTimeout(5000);
});
