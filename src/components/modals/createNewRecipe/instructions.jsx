import { useState, Fragment } from "react";

import InstructionInput from "./instructionInput";

function Instructions({ recipe }) {
    function generateInitialInputs(instructions) {
        const newId = new Date().toISOString();

        if (instructions?.length) {
            return instructions.map((instruction) => {
                const id = instruction.slice(0, 10);
                const toPass = {
                    id,
                    instruction,
                    removeInstruction
                };
                return {
                    id,
                    toPass
                };
            });
        }

        return [
            {
                id: newId,
                instruction: "",
                toPass: { id: newId, removeInstruction }
            }
        ];
    }

    const initialInputs = generateInitialInputs(recipe.instructions);

    const [inputs, setInputs] = useState(initialInputs);

    function addInstruction() {
        const newId = new Date().toISOString();
        setInputs((inputs) => {
            return [
                ...inputs,
                {
                    id: newId,
                    toPass: { instruction: "", id: newId, removeInstruction }
                }
            ];
        });
    }

    function removeInstruction(id) {
        setInputs((inputs) => {
            return inputs.filter((input) => input.id !== id);
        });
    }

    return (
        <>
            <span className="d-block mb-3 mt-4">Instructions:</span>
            {inputs.map(({ id, toPass }, index) => {
                return (
                    <Fragment key={id}>
                        <InstructionInput index={index} {...toPass} />
                    </Fragment>
                );
            })}

            <button onClick={addInstruction} type="button" className="btn border-0">
                <span className="fs-7 text-muted my-3">Add more Instruction ?</span>
            </button>
        </>
    );
}

export default Instructions;
