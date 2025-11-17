const {test, expect} = require('@playwright/test');

test('Home Page', async ({page}) => {

    await page.goto('https://www.demoblaze.com/');
    const pageTitle = await page.title();
    console.log('page title: ', pageTitle);

    await expect(page).toHaveTitle('STORE');

    const pageURL =await page.url();
    console.log('page URL : ',pageURL);

    await expect(page).toHaveURL('https://www.demoblaze.com/');

    await page.close();

});
