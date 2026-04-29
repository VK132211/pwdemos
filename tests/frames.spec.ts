import { test, expect, Frame, Locator } from '@playwright/test'

test('frames demo', async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frames: Frame[] = page.frames();
    expect(frames.length).toEqual(7);

    // const frame: Frame | null = page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_1.html" })
    // if (frame) {
    //     frame.locator("[name='mytext1']").fill("Hello");
    //     // frame.fill("[name='mytext1']", "Hello")
    // } else {
    //     console.log("frame is not available");

    // }
    const inputBox: Locator = page.frameLocator("[src='frame_1.html']").locator("[name='mytext1']")
    await inputBox.fill("Jacob")
    await page.waitForTimeout(5000);

})

test('child frames', async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame: Frame | null = page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_3.html" })
    if (frame) {
        await frame.locator("[name='mytext3']").fill('Welcome')
        const childFrames: Frame[] = frame.childFrames();
        const radio = childFrames[0].getByLabel("I am a human")
        await radio.check();
        await expect(radio).toBeChecked();

    } else {
        console.log("Frame Unavailable");

    }
})