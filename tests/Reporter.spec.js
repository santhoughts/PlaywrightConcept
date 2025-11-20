const {test, expect} = require('@playwright/test')

test('test1', async({page}) => {
    await page.goto("https://www.demoblaze.com/");
    expect(page).toHaveTitle("STORE");
})



test('test2', async({page}) => {
    await page.goto("https://www.demoblaze.com/");
    expect(page).toHaveTitle("STORE");
})



test('test3', async({page}) => {
    await page.goto("https://demo.nopcommerce.com/");
    expect(page).toHaveTitle("nopCommerce demo store. Home page title");
})