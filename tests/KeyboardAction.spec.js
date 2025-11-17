const { test, expect } = require("@playwright/test");

test("Handle keyboard action", async ({ page }) => {
  await page.goto("https://gotranscript.com/text-compare");

  await page.fill("[name='text1']", "Welcome to automation!");

  // Ctrl + A
  await page.keyboard.press("Control+A");

  // Ctrl + C
  await page.keyboard.press("Control+C");

  // Tab
  await page.keyboard.down("Tab");
  await page.keyboard.up("Tab");

  //Ctrl + V
  await page.keyboard.press("Control+V");

  await page.waitForTimeout(5000);
});
