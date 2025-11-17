const { test, expect } = require("@playwright/test");

test("AssertionTest", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");

  // 1) expect(page).toHaveURL()              Page has URL
  await expect(page).toHaveURL("https://demo.nopcommerce.com/");

  // 2) expect(page).toHaveTitle()            Page has title
  await expect(page).toHaveTitle("nopCommerce demo store. Home page title");

  // 3) expect(locator).toBeVisible()        Element is visible
  const headerLogo = await page.locator(".header-logo");
  await expect(headerLogo).toBeVisible();

  // 4) expect(locator).toBeEnabled()        Control is enabled
  //expect(locator).toBeDisabled()       Element is disabled

  const searchBox = await page.locator("#small-searchterms");
  await expect(searchBox).toBeEnabled();

  // 5) expect(locator).toBeChecked()        Radio/Checkbox is checked
  // Radio button
  await page.locator(".ico-register").click();
  const maleGenderRadioButton = page.locator("#gender-male");
  await maleGenderRadioButton.click();
  await expect(maleGenderRadioButton).toBeChecked();

  // CheckBox
  const newsLetter = await page.locator("#Newsletter");
  await expect(newsLetter).toBeChecked();

  // 6) expect(locator).toHaveAttribute()     Element has attribute
  const registerButton = await page.locator("#register-button");
  await expect(registerButton).toHaveAttribute("type", "submit");

  // 7) expect(locator).toHaveText()          Element matches text

  const registerHeading = await page.locator(".page-title h1");
  await expect(registerHeading).toHaveText("Register");

  //8) expect(locator).toContainText()       Element contains text
  await expect(registerHeading).toContainText("Reg");

  // 9) expect(locator).toHaveValue(value)    Input has a value
  const emailField = await page.locator("#Email");
  await emailField.fill("test@gmail.com");
  await expect(emailField).toHaveValue("test@gmail.com");

  // 10) expect(locator).toHaveCount()        List of elements has given length
  const options = await page.locator("select[name='DateOfBirthMonth'] option");
  await expect(options).toHaveCount(13);
});
