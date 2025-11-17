const { test, expect } = require("@playwright/test");

test("Handle Date Picker", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Directly fill the date
  //await page.fill("//input[@id='datepicker']", "11/20/2025");

  // date picker  target date = 01/01/2027

  const year = "2027";
  const month = "January";
  const date = "1";

  await page.click("#datepicker"); // opens the calendar

  while (true) {
    const currentYear = await page.locator(".ui-datepicker-year").textContent();
    const currentMonth = await page
      .locator(".ui-datepicker-month")
      .textContent();

    if (currentYear == year && currentMonth == month) {
      break;
    }

    await page.locator("//a[@title='Next']").click();
  }

  const dates = await page.$$("//td[@data-handler='selectDay']");

  //   for (const dt of dates) {
  //     const currentDate = await dt.textContent();
  //     if (currentDate == date) {
  //       dt.click();
  //       break;
  //     }
  //   }

  // Direct date selection

  await page.click("//a[@class='ui-state-default'][text()='" + date + "']");

  await page.waitForTimeout(5000);
});
