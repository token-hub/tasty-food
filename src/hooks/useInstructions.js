import { useState } from "react";

export function useInstructions(onChange) {
    const [inputs, setInputs] = useState([]);

    function addInstruction() {
        const newId = new Date().toISOString();
        const newInstruction = {
            id: newId,
            instruction: ""
        };
        setInputs((inputs) => [...inputs, newInstruction]);
        onChange({ target: { name: "instructions", value: [...inputs, newInstruction] } });
    }

    function removeInstruction(id) {
        setInputs((inputs) => inputs.filter((input) => input.id !== id));
        onChange({ target: { name: "instructions", value: inputs.filter((input) => input.id !== id) } });
    }

    return {
        inputs,
        setInputs,
        addInstruction,
        removeInstruction
    };
}
