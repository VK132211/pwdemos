import { test, expect, Locator } from '@playwright/test'

test('Handle Dynamic Elems using XPATH', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    // let button: Locator = page.locator("//button[text()='STOP' or text()='START']")
    let button: Locator = page.getByRole('button', { name: /START|STOP/ });

    for (let i = 0; i < 5; i++) {
        await button.click();
    }
    await page.waitForTimeout(2000);
})