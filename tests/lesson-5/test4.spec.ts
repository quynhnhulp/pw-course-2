import { test } from '@playwright/test';

test("Test 3", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com");
    await page.click("//a[@href='04-xpath-personal-notes.html']");
     for (let i = 1; i <= 10; i++) {
    await page.locator("//input[@id='note-title']").fill(`Tiêu đề ${i}`);
    await page.locator("//textarea[@id='note-content']").fill(`Matt Deitke ban đầu từ chối lời mời gia nhập Meta, nhưng sau đó CEO Mark Zuckerberg đã trực tiếp liên hệ ${i}`);
    await page.click("//button[@id='add-note']");

    await page.locator("//input[@id='search']").fill(`Tiêu đề ${i}`);
     }

});