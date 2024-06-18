import React from "react";
import { useState } from "react";
import ListItem from "./ListItem";
import { itemData } from "./ListItem";

function List()
{
    const [ListItems, SetListItems] = useState<itemData[]>([])

    return (
        <>
            <button onClick={createNewItem}> {/*Just for testing atm*/}
                Test add new item
            </button>
            <button onClick={deleteLastItem}> {/*Just for testing atm*/}
                test delete last
            </button>
            <ol>
                {ListItems.map((item) => {
                    return(<ListItem itemName = {item.name} completed = {item.completed}></ListItem>)
                })}
            </ol>
        </>

        
    )


    function createNewItem()
    {
        const itemText: string = Date.now().toString(); // just for testing atm, use the current time as the items text
        const randomCompleted: boolean = Math.random() < 0.5; // just for testing atm, randomly decide if the task is completed or not

        const newList = [...ListItems];
        newList.push(new itemData(itemText, randomCompleted));
        SetListItems(newList);
    }

    function deleteLastItem()
    {
        let newList = [...ListItems.slice(0, -1)]
        SetListItems(newList);
    }
}



export default List;