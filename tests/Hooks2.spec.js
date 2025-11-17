const { test, expect } = require("@playwright/test");

// test beforeEach hooks
let page;
test.beforeEach(async ({ browser }) => {
  // login
  page = await browser.newPage();
  await page.goto("https://www.demoblaze.com/");
  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("Sanjeev5252");
  await page.locator("#loginpassword").fill("Test@123");
  await page.locator("//button[text()='Log in']").click();
});

// test afterEach
test.afterEach(async () => {
  // logout
  await page.locator("#logout2").click();
});

test("Verify HomePage", async () => {
  // Home page
  await page.waitForSelector("//a[@class='hrefch']");
  const products = await page.$$("//a[@class='hrefch']");
  expect(products).toHaveLength(9);

  await page.waitForTimeout(5000);
});

test("Verify  Add to cart", async () => {
  // Add to cart
  await page.locator("//a[text()='Samsung galaxy s6']").click();
  await page.locator("//a[text()='Add to cart']").click();

  page.on("dialog", async (dialog) => {
    await expect(dialog.message()).toContain("Product added.");
    await dialog.accept();
  });

  await page.waitForTimeout(5000);
});
