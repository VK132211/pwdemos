import { test, chromium } from '@playwright/test'

test('browser settings', async () => {
    const browser = await chromium.launch({ headless: false })
    const context = await browser.newContext(
        {
            viewport: { width: 1200, height: 800 },
            // proxy: '',
            ignoreHTTPSErrors: true
        }
    );
    const page = await context.newPage();
    // await page.goto('https://www.google.com/')
    await page.goto('https://expired.badssl.com/')
    await page.waitForTimeout(7000)

})