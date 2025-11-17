const { test, expect } = require("@playwright/test");
const { statSync } = require("fs");

test("Handel dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // multiple way to select option from the dropdown

  //await page.locator("#country").selectOption({ label: "India" }); //  label / visible text
  //await page.locator("#country").selectOption("India"); // visible text
  //await page.locator("#country").selectOption({ value: "UK" }); // By value
  //await page.locator("#country").selectOption({ index: 1 }); // By index
  //await page.locator("#country", "India"); // By text

  // Assertion

  // check number of options in dropdown - approach 1
  //   const options = await page.locator("#country option");
  //   await expect(options).toHaveCount(10);

  // // check number of options in dropdown - approach 2
  // const options = await page.$$("#country option");
  // console.log("Number of options : ", options);
  // await expect(options.length).toBe(10);

  // // Check persence of value in the dropdown - approach1
  // const content = await page.locator("#country").textContent();
  // await expect(content.includes).toBeTruthy();

  // check persence of value in the dropdown  - Approach 2 - Using loop
  const options = await page.$$("#country option");
  let status = false;
  for (const option of options) {
    let value = await option.textContent();
    if (value.includes("France")) {
      status = true;
      break;
    }
  }

  console.log(status);
  expect(status).toBeTruthy();

  await page.waitForTimeout(5000);
});
