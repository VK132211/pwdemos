import { test, expect, Locator } from '@playwright/test'

test("Xpath Axes", async ({ page }) => {
    await page.goto("https://www.w3schools.com/html/html_tables.asp");
    const germanyCell: Locator = page.locator("//td[text()='Germany']/self::td")
    await expect(germanyCell).toHaveText("Germany")
    const germanyCellsParent: Locator = page.locator("//td[text()='Germany']/parent::tr")
    await expect(germanyCellsParent).toContainText("Alfreds Futterkiste")

    const childSelector: Locator = page.locator("//table[@id='customers']//tr[3]/child::td")
    await expect(childSelector).toHaveCount(3)

    const ancestorSlector: Locator = page.locator("//td[text()='Germany']/ancestor::table")
    await expect(ancestorSlector).toHaveAttribute('id', 'customers')

    const descendantSelector: Locator = page.locator("//table[@id='customers']/descendant::td")
    await expect(descendantSelector).toHaveCount(18)

    const followingSiblingSelctor: Locator = page.locator("//td[text()='Maria Anders']/following-sibling::td")
    await expect(followingSiblingSelctor).toHaveText("Germany");

    const followingSelctor: Locator = page.locator("//td[text()='Germany']/following::td")
    await expect(followingSelctor).toHaveText("Centro comercial Moctezuma");

    const precedingSiblingSelctor: Locator = page.locator("//td[text()='Maria Anders']/preceding-sibling::td")
    await expect(precedingSiblingSelctor).toHaveText("Alfreds Futterkiste");

    const precedingSelctor: Locator = page.locator("//td[text()='Maria Anders']/preceding::td")
    await expect(precedingSelctor).toHaveCount(1)

})