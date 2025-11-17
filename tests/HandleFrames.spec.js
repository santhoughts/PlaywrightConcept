const { test, expect } = require("@playwright/test");

test("Hadle frames", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  // total frames
  const allFrames = await page.frames();
  console.log("Numer of frames available : ", allFrames.length);

  // Approach- 1 : using url and name
  // const fr = await page.frame("name"); // if name is persent
  // const frame1 = await page.frame({
  //   url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  // });
  // await frame1.fill("[name='mytext1']", "Hello!");

// Approach- 2: using locators 
  const inputBox = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']");
  inputBox.fill("Sanjeev !");

  await page.waitForTimeout(5000);
});
