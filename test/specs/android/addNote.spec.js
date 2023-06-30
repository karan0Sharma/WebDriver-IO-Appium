import addNoteScreen from "../../screenObjects/android/addNote.screen.js";


describe('ColorNote Test Suite', async ()=>
{

    it('Skip Tutorial after launch', async() =>
    {   
        await addNoteScreen.skipTutorial.click();
        await expect(addNoteScreen.addNoteText).toBeDisplayed();
    })

    it('Create a new Note, save changes and verify changes saved successfully', async () =>
    {
        await addNoteScreen.addNoteButton.click();
        await addNoteScreen.addNoteOptionText.click();
        await expect(addNoteScreen.statusEditing).toBeDisplayed();

        //Add Note title and Note Contents and then save the changes
        await addNoteScreen.noteEditTitle.setValue("Favourite animals");
        await addNoteScreen.noteEditBody.setValue("Dog\nDolphin\nSeal\nKangaroo");
        addNoteScreen.saveNote();

        //Verify changes done
        await expect(addNoteScreen.noteEditButton).toBeDisplayed();
        await expect(addNoteScreen.noteEditTitle).toHaveText("Favourite animals");
        await expect(addNoteScreen.viewNote).toHaveText("Dog\nDolphin\nSeal\nKangaroo");

    })

})

