//const {test, expect} = require('@playwright/test');
import {test, expect} from "@playwright/test";

test('Locator', async ({page}) => {
        await page.goto('https://www.demoblaze.com/');

        // click on login button   - property 
        // await page.locator('id=login2').click();
        await page.click('id=login2');

        //provide username -css
        //await page.locator('id=loginusername').fill('Sanjeev');
        await page.fill('id=loginusername', 'Sanjeev052');
        //await page.type('id=loginusername', 'Sanjeev052');


        //provide password - css
        await page.fill('id=loginpassword', 'test"123');


        // click on login button 
        await page.click("//button[text()='Log in']");


        // Verify log out link persence 
       const logoutLink =   page.locator("//a[text()='Log out']");

       await expect(logoutLink).toBeVisible();

       await page.close();

});