const {test, expect} = require('@playwright/test');

test('muliptleElements', async({page}) => {
    await page.goto('https://www.demoblaze.com/');


    // Get all link
    const links = await page.$$('a');
    for(const link of links){
        const linkText = await link.textContent();
        console.log(linkText);
    }


    console.log('--------Below is the product names ----------')
    // Get all the product name 
   await page.waitForSelector("//div[@id='tbodyid']//h4/a");
    const products = await page.$$("//div[@id='tbodyid']//h4/a");
    for(const product of products){
        const productName = await product.textContent();
        console.log(productName);
    }

    page.close();

});