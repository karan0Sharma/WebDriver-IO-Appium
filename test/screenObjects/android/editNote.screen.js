import addNoteScreen from "./addNote.screen.js";
class editNoteScreen 
{
  async skpTutorial()
  {
    await addNoteScreen.skipTutorial.click();
    await expect(addNoteScreen.addNoteText).toBeDisplayed();
  }

  async addAndSaveNote(setTitle, setBody)
  {
    await addNoteScreen.addNoteButton.click();
    await addNoteScreen.addNoteOptionText.click();
    await expect(addNoteScreen.statusEditing).toBeDisplayed();

    //Add Note title and Note Contents and then save the changes
    await addNoteScreen.noteEditTitle.setValue(setTitle);
    await addNoteScreen.noteEditBody.setValue(setBody);
    addNoteScreen.saveNote();

  }

  get noteTitle()
  {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
  }

  get menuButton()
  {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/menu_btn"]');
  }

  get deleteOption()
  {
    return  $('//*[@text="Delete"]');
  }

  get navigateButton()
  {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
  }

  get trashCanOption()
  {
    return $('//*[@text="Trash Can"]');
  }

  get trashCanNoteTitle()
  {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
  }

}

export default new editNoteScreen();

