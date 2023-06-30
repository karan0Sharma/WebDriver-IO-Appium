import editNoteScreen from "../../screenObjects/android/editNote.screen.js";


describe('ColorNote Test Suite', async ()=>
{

    it('Delete recently created Note, verify it is deleted successfully', async () =>
    {
        
        await editNoteScreen.skpTutorial();
        await editNoteScreen.addAndSaveNote("Favourite sitcoms", "Whoss the boss\n Different Strokes\nI dream of jeannie");

        const noteTitleText = await editNoteScreen.noteTitle.getText();
        await editNoteScreen.menuButton.click();
        await editNoteScreen.deleteOption.click();
        await driver.pause(3000);
        await driver.acceptAlert();

        await editNoteScreen.navigateButton.click();
        await editNoteScreen.trashCanOption.click();


        //assertion test to confirm
        const trashCanNoteTitleText  = await editNoteScreen.trashCanNoteTitle.getText();
        await expect(trashCanNoteTitleText).toEqual(noteTitleText);
        
    })
})