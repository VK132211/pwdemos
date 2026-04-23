import { test, expect, Locator } from '@playwright/test'

test('shadow dom', async ({ page }) => {
    await page.goto('https://shop.polymer-project.org/');
    const shopNowBtn: Locator = page.locator("a[aria-label=\"Men's Outerwear Shop Now\"]")
    await shopNowBtn.click();
    await page.waitForTimeout(2000)

    const productsFound = await page.locator('div.title').all();
    expect(productsFound.length).toBe(16)
})