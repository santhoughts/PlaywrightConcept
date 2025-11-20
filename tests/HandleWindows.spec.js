const{test, expect, chromium} = require('@playwright/test')

test('Handle window/pages', async()=>{

   const browser =  await chromium.launch();
   const context = await browser.newContext();

   const page1 = await context.newPage();
   const page2 = await context.newPage();

   const allPages = context.pages();
   console.log('Number of pages : ', allPages.length);

   await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
   expect(page1).toHaveTitle('OrangeHRM');

   await page2.goto("https://www.orangehrm.com/");
   expect(page2).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM");

   await page2.waitForTimeout(3000);
   
})


test.only('Handle multiple window/pages', async()=>{

   const browser =  await chromium.launch();
   const context = await browser.newContext();

   const page1 = await context.newPage();

   const allPages = context.pages();
   console.log('Number of pages : ', allPages.length);

   await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
   expect(page1).toHaveTitle('OrangeHRM');

   // Before switching the next page create a page evenet 
   const promisePage = context.waitForEvent('page');
   await page1.locator("//a[text()='OrangeHRM, Inc']").click();

   const newPage = await promisePage;
   expect(newPage).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM"); 

   await page1.waitForTimeout(3000);
   await newPage.waitForTimeout(3000);

   await browser.close();
   
})