import React from "react";

function ListItem({itemName, completed}: {itemName: string, completed: boolean})
{
    return (
        <li>Im  a list item! {itemName} {completed ? "complete" : "not complete"}</li>
    );
}

export class itemData {

    name: string;
    completed: boolean;

    constructor(name: string, completed: boolean) {
        this.name = name;
        this.completed = completed;
    }
}

export default ListItem;