const { test, expect } = require("@playwright/test");

//only
test.only("test1", async ({ page }) => {
  console.log("this is test1");
});

// skip
test.skip("test2", async ({ page }) => {
  console.log("this is test2");
});

// skip the test on the basis conditions
test("test3", async ({ page, browserName }) => {
  console.log("this is test3");
  if (browserName === "chromium") {
    test.skip();
  }
});

// Fixme
test("test4", async ({ page }) => {
  test.fixme();
  console.log("this is test4...");
});

// Fail  -> this is for the failed test cases, we want to fail the test cases intentionaly
test("test5", async ({ page }) => {
  test.fail();
  console.log("this is test5");
  expect(1).toBe(1); // if both exp & actual  is failed then test pass
});

test("test 6", async ({ page, browserName }) => {
  console.log("this is test 6");
  if (browserName === "chromium") {
    test.fail();
  }
});

// slow() -> this is used for increase the test time by 3 times,   By default test time is 30 sec, if we want to modify it then we can modify it by changing the timeout in config file.

test("test7", async ({ page }) => {
  test.slow();
  test.setTimeout(5000)
  await page.goto("https://www.demoblaze.com/");
  console.log("this is test 7..");
});
