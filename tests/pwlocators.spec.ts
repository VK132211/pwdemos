/*
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

import { test as base, expect } from '@playwright/test';
import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';

// 1. Create a custom test fixture to apply stealth
const test = base.extend({
    page: async ({ }, use) => {
        chromium.use(stealth());
        const browser = await chromium.launch({ headless: false, slowMo: 100 });
        const context = await browser.newContext({
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
        });
        const page = await context.newPage();
        await use(page);
        await browser.close();
    },
});

// 2. Your test now uses the "stealthy" page automatically
test('Verify Playwright locators', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/', { waitUntil: 'networkidle' });

    // Verify Logo
    const logo = page.getByAltText('nopCommerce demo store');
    await expect(logo).toBeVisible();

    // Verify Welcome Text
    const welcomeText = page.getByText("Welcome to our store");
    await expect(welcomeText).toBeVisible();

    // Navigation
    await page.getByRole('link', { name: 'Register' }).click();

    // Registration Form
    await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();
    await page.getByLabel('First name:').fill('vk');
    await page.getByLabel('Last name:').fill('M');
    await page.getByLabel('Email:').fill('abcd@gmail.com');

    // Search
    await page.getByPlaceholder('Search store').fill('Apple MacBook Pro');

    // <span title='Issues count'>25 issues</span>
    //await expect(page.getByTitle('Issues count')).toHaveText('25 issues');

    //<button data-pw="directions">Itinéraire</button>
    //await page.getByTestId('directions').click();
});
