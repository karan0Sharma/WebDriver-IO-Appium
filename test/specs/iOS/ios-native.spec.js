describe('Test Native features', async () =>
{

    it('Practice using Alert dialog', async ()=>
    {
      (await $('~Alert Views')).click();
      (await $('~Okay / Cancel')).click();
      console.log(await driver.getAlertText());

      await driver.acceptAlert();
    })

    it('Practice scrolling', async () =>
    {
        (await $('~Picker View')).click();

        const redPicker = await $('//XCUIElementTypePickerWheel[@name="Red color component value"]');
        const greenPicker = await $('~Green color component value');
        const bluePicker = await $('~Blue color component value');
        // there is a command to perform scroll using javascript execute method
        
        await driver.execute("mobile: scroll", {element: redPicker.elementId, direction : "down"});
        await driver.execute("mobile: scroll", {element: greenPicker.elementId, direction : "down"});
        await driver.execute("mobile: scroll", {element: bluePicker.elementId, direction : "down"});

        await redPicker.addValue("125");
        await greenPicker.addValue("0");
        await bluePicker.addValue("125");

        await driver.pause(3000);

    })

    it('Practice Sliders test', async ()=>
    {
        (await $('~Sliders')).click();
        const defaultSlider = (await $('//XCUIElementTypeSlider'));
        await defaultSlider.setValue("1%");
        await driver.pause(2000);

        await expect(await defaultSlider.getAttribute("value")).toEqual("100%");

        const tintedSlider = await $('//XCUIElementTypeCell[2]/XCUIElementTypeSlider');
        await tintedSlider.setValue("0.2%");
        await driver.pause(3000);

        const minAndMaxSlider = await $('//XCUIElementTypeCell[4]/XCUIElementTypeSlider');
        await minAndMaxSlider.setValue("0.9%");
        await driver.pause(3000);

    })
})