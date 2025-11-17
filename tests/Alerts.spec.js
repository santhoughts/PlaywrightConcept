const { test, expect } = require("@playwright/test");

test.skip("Alert with OK", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Enabling dialog window handler
  page.on("dialog", async (dialog) => {
    //expect(dialog.type()).toContain("Alert");
    expect(dialog.message()).toContain("I am an alert box!");
    await dialog.accept();
  });

  await page.click("//button[@id='alertBtn']");
  await page.waitForTimeout(5000);
});

test.skip("Confirmation dialog with OK and Cancel", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Enabling dialog window handler
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("confirm");
    expect(dialog.message()).toContain("Press a button!");
    await dialog.accept(); // for OK button
    //await dialog.dismiss(); // for Cancel button
  });

  await page.click("//button[@id='confirmBtn']");
  await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed OK!");

  await page.waitForTimeout(5000);
});


test("Handle prompt with OK and Cancel", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Enabling dialog window handler
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("prompt");
    expect(dialog.message()).toContain("Please enter your name:");
    expect(dialog.defaultValue()).toContain("Harry Potter");
    await dialog.accept("Jhon"); // for OK button
    //await dialog.dismiss(); // for Cancel button
  });

  await page.click("//button[@id='promptBtn']");
  await expect(page.locator("//p[@id='demo']")).toHaveText(
    "Hello Jhon! How are you today?"
  );

  await page.waitForTimeout(5000);
});
