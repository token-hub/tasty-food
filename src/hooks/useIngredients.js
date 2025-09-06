import { useState } from "react";

export function useIngredients(onChange) {
    const [inputs, setInputs] = useState([]);

    function removeIngredient(id) {
        let newInputs;
        setInputs((inputs) => {
            newInputs = inputs.filter((input) => input.id !== id);
            return newInputs;
        });
        onChange({ target: { name: "ingredients", value: newInputs } });
    }

    function addIngredient() {
        const newId = new Date().toISOString();
        const newIngredient = {
            id: newId,
            quantity: 0,
            unit: "",
            name: ""
        };
        let newInputs;
        setInputs((inputs) => {
            newInputs = [...inputs, newIngredient];
            return newInputs;
        });
        onChange({ target: { name: "ingredients", value: newInputs } });
    }

    return {
        inputs,
        setInputs,
        addIngredient,
        removeIngredient
    };
}
