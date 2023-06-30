class addNoteScreen 
{
    get skipTutorial() 
    {
        return $('//*[@text="SKIP"]');
    }

    get addNoteText()
    {
        return $('//*[@text="Add note"]');
    }

    get addNoteButton()
    {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]');
    }

    get addNoteOptionText()
    {
        return $('//*[@text="Text"]');
    }
     
    get statusEditing()
    {
        return $('//*[@text="Editing"]');
    }

    get noteEditTitle()
    {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    }

    get noteEditBody()
    {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    }
   
    // can also add helper functions in screen class objects file.
    async saveNote()
    {
        await driver.back();
        await driver.back();
    }
   
    get noteEditButton()
    {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    }

    get viewNote()
    {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
    }
    

}

export default new addNoteScreen();

