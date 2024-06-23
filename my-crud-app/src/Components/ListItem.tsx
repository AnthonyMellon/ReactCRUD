import React, { useState } from "react";

function ListItem({itemName, completed, time}: {itemName: string, completed: boolean, time: number})
{
    const [isComplete, setIsComplete] = useState<boolean>(completed)

    return (
        <li>
            {itemName} {isComplete ? "complete" : "not complete"} {`(${time})`}
            <button onClick={ToggleComplete}>Toggle Complete</button>
        </li>
    );

    function ToggleComplete()
    {
        setIsComplete(!isComplete);
    }
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