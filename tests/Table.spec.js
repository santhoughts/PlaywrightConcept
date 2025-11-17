const { test, expect } = require("@playwright/test");

test("Handle table row and column", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const table = await page.locator("//table[@id='productTable']");
  const columns = await table.locator("thead tr th");
  console.log("Number of coulmns : ", columns);
  expect(await columns.count()).toBe(4);

  const rows = await table.locator("tbody tr");
  console.log("Number of rows : ", rows);
  expect(await rows.count()).toBe(5);

  // I want to select the checkbox on the basis of product name
  await selectProduct(rows, page, "Smartphone");
  await selectProduct(rows, page, "Smartwatch");
  await selectProduct(rows, page, "Wireless Earbuds");

  // I want to print all the table details in console log
  for (let i = 0; i < (await rows.count()); i++) {
    const row = rows.nth(i);
    const tds = row.locator("td");

    for (let j = 0; j < (await tds.count()) - 1; j++) {
      console.log(await tds.nth(j).textContent());
    }
  }

  // Read all the data from the table from the different pages
  const pages = await page.locator(".pagination li a");
  console.log("Number of pages in the table : ", await pages.count());

  for (let p = 0; p < (await pages.count()); p++) {
    if (p > 0) {
      await pages.nth(p).click();

      for (let i = 0; i < (await rows.count()); i++) {
        const row = rows.nth(i);
        const tds = row.locator("td");

        for (let j = 0; j < (await tds.count()) - 1; j++) {
          console.log(await tds.nth(j).textContent());
        }
      }

      await page.waitForTimeout(3000);
    }
  }

  await page.waitForTimeout(5000);
});

// create a function to select the product on the basis of name of the product
async function selectProduct(rows, page, name) {
  const matchedRow = rows.filter({
    has: page.locator("td"),
    hasText: name,
  });

  await matchedRow.locator("input").check();
}
