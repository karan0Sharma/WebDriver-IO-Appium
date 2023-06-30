import listScreen from '../../screenObjects/iOS/todoListScreen.js';
import itemScreen from '../../screenObjects/iOS/todoItemScreen.js';

describe('ToDo application Test Cases', () =>
{
    it('Create a todo list', async () => 
    {

       await listScreen.createListButton.click(); 
       await listScreen.listNameInput.setValue("Things to do in the afternoon!");
       await listScreen.createButton.click();
       await expect(listScreen.listName("Things to do in the afternoon!")).toBeExisting();

       await listScreen.listName("Things to do in the afternoon!").click();
       await $('//*[@name="Create item"]').click();
       
       await itemScreen.itemTitleInput.setValue("Go to Gym");
       await itemScreen.dueField.click();
       await itemScreen.datePicker.click();

       await itemScreen.calendarTomorrowDate.click();
       await driver.pause(2000);

       await itemScreen.clickThirdFrame.click();
       await itemScreen.createButton.click();
       await driver.pause(4000);

    })
}) 




