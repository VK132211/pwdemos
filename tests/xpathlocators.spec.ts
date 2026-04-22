import { test, expect, Locator } from '@playwright/test'

test('Verify Xpath Selectors', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/')
    const absoluteLogo: Locator = page.locator("xpath=/html/body/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
    await expect(absoluteLogo).toBeVisible();

    const relativeLogo: Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']")
    await expect(relativeLogo).toBeVisible();

    //img[contains(@alt,'Tri')]

    const searchBox: Locator = page.locator("//*[@id='small-searchterms']")
    await searchBox.fill('Tshirts')
    const searchBtn: Locator = page.locator("//input[@value='Search' or @type='submit']")
    await searchBtn.click();

    const products: Locator = page.locator("//h2/a[contains(@href,'computer')]")
    const productsCount: number = await products.count();
    expect(productsCount).toBeGreaterThan(0);

    const firstProductTextContent: string | null = await products.first().textContent()
    expect(firstProductTextContent).toEqual("Build your own cheap computer")

    console.log(await products.last().textContent())
    console.log(await products.nth(2).textContent())

    const productTitles: string[] = await products.allTextContents();
    console.log(productTitles);
    const expectedProductTitles = [
        'Build your own cheap computer',
        'Build your own computer',
        'Build your own expensive computer',
        'Simple Computer'
    ]

    for (let product of productTitles) {
        console.log(product);

    }
    expect(productTitles).toMatchObject(expectedProductTitles)

    const buildProducts: Locator = page.locator("//h2/a[starts-with(@href,'/build')]")
    expect(await buildProducts.count()).toBe(3);
    // //a[normalize-space()='Shopping Cart']
    const registerLink: Locator = page.locator("//a[text()='Register']")
    expect(registerLink).toContainText("Register")

    const lastFooterLastItem: Locator = page.locator("//div[@class='column follow-us']//li[last()]")
    expect(lastFooterLastItem).toHaveText("Google+");

    const nthItem: Locator = page.locator("//div[@class='column follow-us']//li[position(2)]")
    expect(nthItem).toBeVisible();



})