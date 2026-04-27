import { test, expect, Locator, Page } from '@playwright/test'


async function selectDate(targetYear: string, targetMonth: string, targetDate: string, page: Page, isFuture: boolean) {
    const currentMonth: Locator = page.locator(".ui-datepicker-month");
    const currentYear: Locator = page.locator(".ui-datepicker-year");
    const calendarNext: Locator = page.locator(".ui-datepicker-next");
    const calendarPrev: Locator = page.locator(".ui-datepicker-prev");



    while (true) {
        const currentMonthText = await currentMonth.textContent()
        const currentYearText = await currentYear.textContent()
        if (currentMonthText === targetMonth && currentYearText === targetYear) {
            break;
        }
        if (isFuture) {
            await calendarNext.click();

        } else {
            await calendarPrev.click();
        }

    }

    const allDates = await page.locator(".ui-datepicker-calendar td").all()

    for (let dt of allDates) {
        const dateText = await dt.innerText()
        if (dateText == targetDate) {
            await dt.click();
            break;
        }
    }
    // await page.locator(`[data-date="${targetDate}"]`).click();


}
test("jquery date picker", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dateInput: Locator = page.locator("#datepicker")
    expect(dateInput).toBeVisible();

    // dateInput.fill("04/30/2026")

    const year = "2027"
    const month = "April"
    const date = "29"

    await dateInput.click();
    selectDate(year, month
        , date, page, true
    )

    const expectedDate = "04/29/2027"
    await expect(dateInput).toHaveValue(expectedDate)
    // await page.waitForTimeout(5000);

})