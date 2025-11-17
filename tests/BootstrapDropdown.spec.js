const { test, expect } = require("@playwright/test");

test("Handle bootstrap dropdown", async ({ page }) => {
  await page.goto("");

  await page.locator(".multiselect").click(); // click on the dropdown

  const options = await page.$$("ul>li label input");
  await expect(options.length).toBe(11);

  for (let option of options) {
    const value = option.textContent();
    //console.log("Value is : ", value);

    if(value.includes("Angular") || value.includes("Java")){
        await option.click();
    }
  }
});
