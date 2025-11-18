const { test, expect } = require("@playwright/test");

test.describe("Group 1", async () => {
  test("Test 1 @sanity", async ({ page }) => {
    console.log("this is test 1............");
  });

  test("Test 2 @sanity", async ({ page }) => {
    console.log("this is test 2............");
  });

  test("Test 3 @reg", async ({ page }) => {
    console.log("this is test 3............");
  });

  test("Test 4 @reg", async ({ page }) => {
    console.log("this is test 4............");
  });

  test("Test 5 @sanity@reg", async ({ page }) => {
    console.log("this is test 5............");
  });
});

// if we want to run  sanity tag test then use the below command
// npx playwright test Tags.spec.js --project=chromium --headed --grep '@sanity'

// if we want to run only sanity tag test cases not included in reg as well
// npx playwright test Tags.spec.js --project=chromium --headed --grep '@sanity' --grep-invert '@reg'

// if we want to run test cases that included in both  sanity & reg tag
// npx playwright test Tags.spec.js --project=chromium --headed --grep '@sanity@reg'
