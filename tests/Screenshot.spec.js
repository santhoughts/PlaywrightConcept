const { test, expect } = require("@playwright/test");

// Take screenshot of page
test("page screenshot", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
  await page.screenshot({
    path: "tests/screenshot/" + Date.now() + "homepage.png",
  });
});

// take screenshot of full page
test("Full page screenshot", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
  await page.screenshot({
    path: "tests/screenshot/" + Date.now() + "fullpage.png",
    fullPage: true,
  });
});

// take screenshot of Element
test("Element page screenshot", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
  await page.locator("(//div[@class='card h-100'])[1]").screenshot({
    path: "tests/screenshot/" + Date.now() + "elementImage.png",
    fullPage: true,
  });
});


// for the screenshot or video recording we can enable it from the playwright config file, with the different options like on failure, always, etc in USE section     and check the file in test-result folder 
