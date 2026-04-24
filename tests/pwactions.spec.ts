import { test, expect, Locator } from '@playwright/test'

test('text input actions', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    const nameInputField: Locator = page.getByPlaceholder("Enter Name")
    await expect(nameInputField).toBeVisible();
    await expect(nameInputField).toBeEnabled();
    const maxLengthAttribute: string | null = await nameInputField.getAttribute("maxlength");
    await nameInputField.fill("VK");
    expect(maxLengthAttribute).toBe("15")
    expect(await nameInputField.inputValue()).toEqual("VK");

})

test('radio button actions', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    const maleRadioBtn: Locator = page.locator("#male");
    expect(await maleRadioBtn.isChecked()).toBe(false);
    await maleRadioBtn.check();
    await expect(maleRadioBtn).toBeChecked();
})

test('check boxes', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    // const sundayCheckBox: Locator = page.getByLabel("Sunday")
    // expect(await sundayCheckBox.isChecked()).toBe(false);
    // await sundayCheckBox.check();
    // await expect(sundayCheckBox).toBeChecked();

    const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const checkBoxes: Locator[] = days.map((day) => page.getByLabel(day));
    for (let checkBox of checkBoxes) {
        await checkBox.check();
    }
    const daysToBeUnchecked: string[] = days.slice(4);
    const checkBoxesToBeUnchecked: Locator[] = daysToBeUnchecked.map((day) => page.getByLabel(day));
    for (let checkBox of checkBoxesToBeUnchecked) {
        await (checkBox).uncheck();
        // expect(await checkBox.isChecked()).toBe(false);
        await expect(checkBox).not.toBeChecked();
    }

    for (let checkBox of checkBoxes) {
        if (await checkBox.isChecked()) {
            await checkBox.uncheck();
            await expect(checkBox).not.toBeChecked();
        } else {
            await checkBox.check();
            await expect(checkBox).toBeChecked();
        }
    }
})