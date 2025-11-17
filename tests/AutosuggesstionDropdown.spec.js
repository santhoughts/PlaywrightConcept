const { test, expect } = require("@playwright/test");

test("Handle autosuggestion dropdown", async ({ page }) => {
  await page.goto("https://www.redbus.in/");

  await page.locator("(//div[@class='label___57eda7 '])[1]").fill("Delhi");

  await page.waitForSelector(
    "//li[contains(@class, 'sc-iwsKbI')]//div/text[1]"
  );

  const fromCityOptions = await page.$$(
    "//li[contains(@class, 'sc-iwsKbI')]//div/text[1]"
  );

  for (let option of fromCityOptions) {
    const value = option.textContent();
    console.log(value);
  }
});
