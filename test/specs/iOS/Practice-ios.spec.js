describe('Practice iOS with various element selectors', async ()=>
{

    it('Practice using tag-name selector, also known as className selector', async () =>
    {
         console.log(await $('XCUIElementTypeStaticText').getText());

        const elements = await $$('XCUIElementTypeStaticText');

        for(const element of elements)
        {
            console.log(await element.getText());
        }

    })

    it('Practice using xpath selector', async () => 
    {
       await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();
       await $('//XCUIElementTypeStaticText[@name="Simple"]').click();
       await expect(await driver.getAlertText()).toContain('A Short Title Is Best');

    })

    it('Practice using iOS Class Chain', async () =>
    {
        const alertViews = '**/XCUIElementTypeStaticText[`name == "Alert Views" AND enabled == true`]';
        // write in webdriver io syntax
        (await $(`-ios class chain:${alertViews}`)).click();
    })

    it('Practice using iOS predicate string selector', async () =>
    {
        const alertViews = 'label == "Alert Views" AND enabled == true';
        (await $(`-ios predicate string:${alertViews}`)).click();

        
    })

    it('Assignment', async () =>
    {
        (await $('~Search')).click();
        (await $('//XCUIElementTypeStaticText[@name="Default"]')).click();

        const inputTextField = 'type == "XCUIElementTypeSearchField"';
        const valueAdded = await $(`-ios predicate string:${inputTextField}`);
        await valueAdded.setValue("I love Appium Automation")

        await expect(valueAdded).toHaveText("I love Appium Automation")

        await $('~Clear text').click();

        await expect(valueAdded).not.toHaveText("I love Appium Automation")

    })
})

