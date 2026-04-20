import { test, expect, Locator } from '@playwright/test'

test('Verify CSS Selectors', async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/")
    // const serachBox: Locator = page.locator('input#small-searchterms')
    // const serachBox: Locator = page.locator('input.search-box-text')
    // const serachBox:Locator=page.locator('input[name=q]')
    // const serachBox:Locator=page.locator('[name=q]')
        // const serachBox: Locator = page.locator('input.search-box-text[name=q]')
        const serachBox: Locator = page.locator("input.search-box-text[value='Search store']")

    expect(serachBox).toBeVisible();
    await serachBox.fill("T-shirts")
    await page.waitForTimeout(5000)
})