import { test, expect } from '@playwright/test'

test('simple alert', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on("dialog", (dialog) => {
        console.log(dialog.type());
        // expect(dialog.type).toContain("alert")
        console.log(dialog.message());
        // expect(dialog.message()).toContain("I am an alert box!")

        dialog.accept();
    })
    await page.getByRole('button', { name: 'Simple Alert' }).click();
    await page.waitForTimeout(5000);

})
test('confirmation alert', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on("dialog", (dialog) => {
        console.log(dialog.type());
        // expect(dialog.type).toContain("confirm")
        console.log(dialog.message());
        // expect(dialog.message()).toContain("Press a button!")

        dialog.accept();
        // dialog.dismiss();
    })
    await page.getByRole('button', { name: 'Confirmation Alert' }).click();
    const text: string = await page.locator("#demo").innerText();
    expect(page.locator("#demo")).toHaveText("You pressed OK!")
    await page.waitForTimeout(5000);

})

test("Prompt Alert", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on("dialog", (dialog) => {
        console.log(dialog.type());
        // expect(dialog.type).toContain("confirm")
        console.log(dialog.message());
        // expect(dialog.message()).toContain("Please enter your name:")
        expect(dialog.defaultValue()).toContain("Harry Potter")

        dialog.accept("Vinay");
        // dialog.dismiss();
    })
    await page.getByRole('button', { name: 'Prompt Alert' }).click();
    await page.waitForTimeout(5000);
    expect(page.locator("#demo")).toContainText('Hello Vinay')


})