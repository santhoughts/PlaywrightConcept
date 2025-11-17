const { test, expect } = require("@playwright/test");

test.beforeAll(async () => {
  console.log("this is beforeAll hooks.............");
});

test.beforeEach(async () => {
  console.log("this is beforeEach hooks.............");
});

test.afterEach(async () => {
  console.log("this is afterEach hooks.............");
});

test.afterAll(async () => {
  console.log("this is afterAll hooks.............");
});

// Grouping the test
test.describe("Group 1", async () => {
  test("Test 1", async ({ page }) => {
    console.log("this is test 1............");
  });

  test("Test 2", async ({ page }) => {
    console.log("this is test 2............");
  });
});

test.describe("Group 2", async () => {
  test("Test 3", async ({ page }) => {
    console.log("this is test 3............");
  });

  test("Test 4", async ({ page }) => {
    console.log("this is test 4............");
  });
});
