import { test } from '@playwright/test';

test("Test 2", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com");
    await page.click("//a[@href='02-xpath-product-page.html']");

    // product 1
    await page.locator("//button[@data-product-id='1']").click();
    await page.locator("//button[@data-product-id='1']").click();
    // product 2
    await page.locator("//button[@data-product-id='2']").click();
    await page.locator("//button[@data-product-id='2']").click();
    await page.locator("//button[@data-product-id='2']").click();
    // product 3
    await page.locator("//button[@data-product-id='3']").click();

});