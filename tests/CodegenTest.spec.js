import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('Sanjeev123456');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('Test!!!');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Home (current)' }).click();
  await page.getByRole('link', { name: 'Sony vaio i7' }).click();
});