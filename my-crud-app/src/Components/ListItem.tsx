import React from "react";

function ListItem({itemName, completed, time}: {itemName: string, completed: boolean, time: number})
{
    return (
        <li>{itemName} {completed ? "complete" : "not complete"} {`(${time})`}</li>
    );
}

export class itemData {

    name: string;
    completed: boolean;
    time: number

    constructor(name: string, completed: boolean, time: number) {
        this.name = name;
        this.completed = completed;
        this.time = time;
    }
}

export default ListItem;