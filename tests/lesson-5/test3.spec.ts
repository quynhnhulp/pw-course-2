import { test } from '@playwright/test';

test("Test 3", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com");
    await page.click("//a[@href='03-xpath-todo-list.html']");
    for (let i = 1; i <= 100; i++) {
        await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
        await page.click("//button[@id='add-task']");
    }

    page.on('dialog', async dialog => dialog.accept());

    for (let i = 1; i <= 100; i += 2) {
        const todoText = `Todo ${i}`;
        if (page.locator("//li").filter({ hasText: todoText })) {
            // page.on('dialog', async dialog => dialog.accept())
            await page.click("//button[text()='Delete']");
        }
    }

});