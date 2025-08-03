import { test } from '@playwright/test';

test("Test 1", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com");
    await page.click("//a[@href='01-xpath-register-page.html']");
    await page.locator("//input[@id='username']").fill("nhupham");
    await page.locator("//input[@id='email']").fill("quynhnhulp55@gmail.com");
    await page.locator("//input[@id='female']").check();
    await page.locator("//input[@id='reading']").setChecked(true);
    await page.locator("//select[@id='interests']").selectOption("music");
    await page.locator("//select[@id='country']").selectOption("australia");
    await page.locator("//input[@id='dob']").fill('2025-11-22');
    await page.locator("//input[@id='profile']").setInputFiles("tests/lesson-5/test-data/image.txt");
    await page.locator("//textarea[@id='bio']").fill("Just testing");
    await page.locator("//input[@id='rating']").fill('3');
    await page.locator("//input[@id='favcolor']").fill("#ff0000");
    await page.locator("//input[@id='newsletter']").check();
    await page.locator("//span[@class='slider round']").check();
    await page.locator("//div[@id='starRating']").click();
    // await page.locator("//input[@id='customDate']").fill('2025-12-01');
    await page.click("//button[text()='Register']");
});