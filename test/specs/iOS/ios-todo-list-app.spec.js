
import listScreen from '../../screenObjects/iOS/todoListScreen.js';

describe('Todo app', () => 
{

    it('Create a todo list', async () =>
    {
       await listScreen.createListButton.click(); 
       await listScreen.listNameInput.setValue("Things to do in the afternoon!");
       await listScreen.createButton.click();
       await expect(listScreen.listName("Things to do in the afternoon!")).toBeExisting();
       await driver.pause(3000);
    })
})




