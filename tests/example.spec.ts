import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Tài liệu học automation test/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();
});


test("Test 01", async ({ page }) => {
 await test.step('Navigate to Register Page', async () => {
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
 });
 await test.step("Fill info", async () => {
     await page.fill("//input[@id='username']", "Playwright");
     await page.locator("//input[@id='email']").fill("playwright@gmail.com");
     await page.locator("//textarea[@id='bio']").pressSequentially("Hello", { delay: 200      
     })

     await page.locator("//input[@id='female']").check();
     await page.locator("//input[@id='reading']").setChecked(true);
     await page.locator("//select[@id='country']").selectOption("australia");
     await page.locator("input=[@id='profile']").setInputFiles("tests\lesson-5\test-data\image.txt");
    });
});

test("Test Dialog", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com");
    await page.click("//a[@href='03-xpath-todo-list.html']");
    await page.locator("//input[@id='new-task']").fill("Task1");
    await page.click("//button[@id='add-task']");
    page.on('dialog', async dialog => dialog.accept())
    await page.click("//button[text()='Delete']");

  });