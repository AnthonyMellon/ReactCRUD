import React, { FormEvent, useState } from "react";

interface ButtonProps {
    createItem: (text: string, complete: boolean, time: number) => void;
}

function ItemInput({createItem: createItem}: ButtonProps)
{
    return (
        <>
            <form onSubmit={OnSubmit}>
                <input type="text" name="itemName"></input>
                <input type="checkbox" name="itemComplete"></input>
                <button type="submit">Submit</button>
            </form>
        </>        
    )

    function OnSubmit(event: FormEvent<HTMLFormElement>)
    {
        event.preventDefault();

        const form = event.currentTarget;

        const itemName = form.elements.namedItem('itemName') as HTMLInputElement;
        const itemComplete = form.elements.namedItem('itemComplete') as HTMLFormElement;
        console.log(itemComplete.checked);
        createItem(itemName.value, itemComplete.checked, Date.now());
    }
}

export default ItemInput;