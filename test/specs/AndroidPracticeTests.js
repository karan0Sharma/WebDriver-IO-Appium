describe('Android Practice Tests', async () => 
{

    it('Practice using accessibility id selector', async () => 
    {
        const animate = await $('~Animation');
        await animate.click();
// use assertion to confirm the behaviour
        const hideShowAni = await $('~Hide-Show Animations');

        await expect(hideShowAni).toBeExisting();

    })

    it('Practice using classname selector',async () =>
    {
       const classNameSelector = await $('android.widget.TextView');
       console.log(await classNameSelector.getText());

       //Assertion test 

       await expect(classNameSelector).toHaveText("API Demos");
    })

    it('Practice using xpath selector', async () =>
    {
        // using xpath selector with various arrtibute values
        await $('//android.widget.TextView[@content-desc="App"]').click();

        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

        await $('//android.widget.Button[@text="List dialog"]').click();

        await $('//android.widget.TextView[@text="Command three"]').click();

        const actualText = await $('//android.widget.TextView');
        
        await expect(actualText).toHaveText("You selected: 2 , Command three");

    })

    it('Practice using Android UiAutomator through UiSelector class', async () =>
    {
        (await $('android=new UiSelector().text("App")')).click();
    })

    it('Practice on selector that returns multiple elements', async () =>
    {
     // in this test case, we will work on a selector that returns multiple elements
     // and then use assertion to verify

     const actualText = await $$('android.widget.TextView');
     const expectedList = ["API Demos", "Access'ibility", "Accessibility", "Animation", "App",
    "Content","Graphics", "Media", "NFC", "OS", "Preference", "Text", "Views"];
    const actualList = [];

     // use advanced for loop to extract each of the element of actualist selector and then extract Text and push it to the list.
      
     for( const element of actualText)
     {
        actualList.push(await element.getText());
     }
    
      // Finally use assertion to confirm both the lists are same
     await expect(actualList).toEqual(expectedList);
    
    })

    it('Input text on a text input field', async () =>
    {
        (await $('//android.widget.TextView[@content-desc="Views"]')).click();
        (await $('~Auto Complete')).click();
        (await $('~1. Screen Top')).click();
        const inputCountryField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
        await inputCountryField.addValue("United States");

        // do assertion to confirm
        await expect(inputCountryField).toHaveText("United States");

    })

    it('Test for android driver object', async () =>
    {
        driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples");

        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();

        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

        console.log('ALERT Text -->',await driver.getAlertText());

       // driver.acceptAlert();

       driver.dismissAlert();

        //assertion to confirm alert dialog is no longer displayed
        
        await expect($('//*[@resource-id="android:id/button1"]')).not.toExist();

    })

    it('Practice for Vertical scrolling using android UiScrollable class', async () =>
    {
        await $('~App').click();
        await $('~Activity').click();

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

        await driver.pause(3000);
    })

    it('Practice horizontal scrolling using android UiScrollable class', async () =>
    {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.Gallery1");
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward(2)');
        await driver.pause(2000);
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward(2)');

        await driver.pause(2000);


    })

    it('Date Picker exercise practice using scrolling', async () =>
    {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.DateWidgets1");
        const date = await $('//*[@text="5-28-2023 01:02"]');
        const currentDate = await date.getText();
        console.log(currentDate);
        
        await $('~change the date').click();
        // using android UiScrollable class we will be scrolling horizontally to the right

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

        await $('//*[@text="15"]').click();
        await $('//*[@resource-id="android:id/button1"]').click();

       const updatedDate =  await date.getText();
       console.log(updatedDate);

       await expect(currentDate).not.toEqual(updatedDate);

       await driver.pause(3000);
        
    })

    it.only('Android Sample Test', async () =>
    {   
        // using xpath

        await $('//android.widget.TextView[@content-desc="App"]').click();

        //using accessibility id
        await $('~Alert Dialogs').click();

        // using tag name or className
        (await $('android.widget.Button')).click();

        console.log(await driver.getAlertText());
         
        await driver.dismissAlert();


    } )

})