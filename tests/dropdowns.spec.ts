import { test, expect, Locator } from '@playwright/test'

test('Single Select DropDown', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const countryDropDownSelector: Locator = page.locator("#country");
    await countryDropDownSelector.selectOption("India");
    // await countryDropDownSelector.selectOption({'value':"india"});

    const allCountryDropDownOptions: Locator = page.locator("#country>option")
    await expect(allCountryDropDownOptions).toHaveCount(10);

    const optionsText: string[] = (await allCountryDropDownOptions.allTextContents()).map(op => op.trim());
    expect(optionsText).toContain("Japan");
})

test('multi select dropdown', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const colorDropDownSelector: Locator = page.locator("#colors");
    await colorDropDownSelector.selectOption(['Red', 'Yellow']);

    const allColorDropDownOptions: Locator = page.locator("#colors>option")
    await expect(allColorDropDownOptions).toHaveCount(7)

    const colorOptionsText: string[] = (await allColorDropDownOptions.allTextContents()).map((op) => op.trim());
    expect(colorOptionsText).toContain("Green");

    const mySet = new Set<String>();

    const duplicates: string[] = [];

    for (let color of colorOptionsText) {
        if (mySet.has(color)) {
            duplicates.push(color)
        } else {
            mySet.add(color);
        }
    }
    console.log(duplicates);

})

test('sorted dropdown', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    // const sortedDropDownSelector: Locator = page.getByLabel('Sorted List:')
    const sortedDropDownSelector: Locator = page.locator('#animals')
    await sortedDropDownSelector.selectOption(['Zebra']);

    const allAnimalDropDownOptions: Locator = page.locator("#animals>option")

    const animalOptionsText: string[] = (await allAnimalDropDownOptions.allTextContents()).map((op) => op.trim());
    const originalList: string[] = [...animalOptionsText]
    const sortedList: string[] = [...animalOptionsText].sort();
    expect(originalList).toMatchObject(sortedList)
})

test('Dynamic DropDown', async ({ page }) => {
    await page.goto("https://www.flipkart.com/");
    await page.waitForTimeout(5000);

    await page.getByRole('button', { name: '✕' }).click();

    await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill('smart');

    await page.waitForTimeout(5000);

    const options: Locator = page.locator('ul>li')
    const count = await options.count();
    console.log(count);
    for (let i = 0; i < count; i++) {
        const text = await options.nth(i).textContent();
        if (text == 'smartphone') {
            options.nth(i).click();
            break;
        }
        // console.log( await options.nth(i).innerText());

    }
    await page.waitForTimeout(5000);
})

test('Hidden DropDown', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/");

    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByRole("button", { name: ' Login ' }).click();

    // await page.locator("li a[href='/web/index.php/admin/viewAdminModule']").click();
    await page.getByText("PIM").click();
    await page.locator(".oxd-main-menu-button").click();
    await page.locator('form i').nth(2).click();
    const allOptions: Locator = page.locator("div[role='listbox'] span")
    const count: number = await allOptions.count();
    for (let i = 0; i < count; i++) {
        if (await allOptions.nth(i).innerText() == 'Automation Tester') {
            await allOptions.nth(i).click();
            break;
        }
    }
    await page.waitForTimeout(5000);
})