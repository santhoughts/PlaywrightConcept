const { test, expect } = require("@playwright/test");

test("Upload Single file", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page
    .locator("#singleFileInput")
    .setInputFiles("tests\fileUpload\testFile.pdf.jpg");

  await page.waitForTimeout(5000);
});

test("Upload Multiple file", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page
    .locator("#singleFileInput")
    .setInputFiles([
      "tests\fileUpload\testFile.pdf.jpg",
      "tests\fileUpload\testFile2.pdf.jpeg",
    ]);

  await page.waitForTimeout(5000);

  // Removing the files
  await page.locator("#singleFileInput").setInputFiles([]);
  await page.waitForTimeout(5000);
});
