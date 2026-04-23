import { test, expect, chromium } from '@playwright/test'

test('cookies', async () => {
    const browser = await chromium.launch({ headless: false })
    const context = await browser.newContext();
    const page = await context.newPage()

    context.addCookies([{
        name: 'mycookie', value: '12456', url: "https://testautomationpractice.blogspot.com/"
    }, {
        name: 'mycookie1', value: '2456', url: "https://testautomationpractice.blogspot.com/"
    }])
    await page.goto("https://testautomationpractice.blogspot.com/")

    const getAllCookies = await context.cookies();

    const getOneCookie = getAllCookies.find((i) => i.name == 'mycookie');
    expect(getOneCookie?.value).toBe('12456')
    expect(getOneCookie).toBeDefined();
    console.log(getAllCookies);
    
    await page.waitForTimeout(7000)
})