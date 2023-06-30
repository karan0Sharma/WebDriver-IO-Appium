class listScreen {

    get createListButton()
    {
        return $('//*[@name="Create list"]');
    }

    get listNameInput()
    {
        return $('//*[@value="List Name"]');
    }

    get createButton()
    {
        return $('//*[@name="Create"]');
    }

   listName(name)
   {
    return $(`~${name}`);
   }

}

export default new listScreen();


