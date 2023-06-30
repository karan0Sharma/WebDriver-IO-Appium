class itemScreen {

    get createItemButton()
    {
        return $('//*[@name="Create item"]');
    }

    get itemTitleInput()
    {
       const value = 'value == "Title"';
       return $(`-ios predicate string:${value}`)
    }

    get dueField()
    {
        return $('//*[@value="Due"]');
    }
    
    get datePicker()
    {
        return $('~Date Picker');
    }

    get calendarTomorrowDate()
    {
       const tomorrow = new Date();
       tomorrow.setDate(tomorrow.getDate()+1);

       let date = tomorrow.getDate();

       return $(`//XCUIElementTypeButton[contains(@name, '${date}')]`)
    }

    get clickThirdFrame()
    {
        return $('//XCUIElementTypeWindow[@index=2]');
    }

    get createButton()
    {
        return $('~Create');
    }

}

export default new itemScreen();


