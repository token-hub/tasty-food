import { useState } from "react";

export function useIngredients(onChange) {
    const [inputs, setInputs] = useState([]);

    function removeIngredient(id) {
        setInputs((inputs) => inputs.filter((input) => input.id !== id));
        onChange({ target: { name: "ingredients", value: inputs.filter((input) => input.id !== id) } });
    }

    function addIngredient() {
        const newId = new Date().toISOString();
        const newIngredient = {
            id: newId,
            quantity: 0,
            unit: "",
            name: ""
        };

        setInputs((inputs) => [...inputs, newIngredient]);
        onChange({ target: { name: "ingredients", value: [...inputs, newIngredient] } });
    }

    return {
        inputs,
        setInputs,
        addIngredient,
        removeIngredient
    };
}
