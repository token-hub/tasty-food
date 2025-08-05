import { useState, Fragment } from "react";

import InstructionInput from "./instructionInput";

function Instructions() {
    const [count, setCount] = useState(0);

    const initialInputs = [
        {
            id: count,
            component: InstructionInput
        }
    ];

    const [inputs, setInputs] = useState(initialInputs);

    function addInstruction() {
        setInputs([
            ...inputs,
            {
                id: count + 1,
                component: InstructionInput
            }
        ]);
        setCount((count) => count + 1);
    }

    function removeInstruction(id) {
        if (count > 0) {
            setCount((count) => count - 1);
            const filteredInstructions = inputs.filter((input) => input.id !== id);
            setInputs(filteredInstructions);
        }
    }

    return (
        <>
            <span className="d-block mb-3 mt-4">Instructions:</span>
            {inputs.map(({ id, component }, index) => {
                let Component = component;
                return (
                    <Fragment key={id}>
                        <Component id={id} index={index} count={count} removeInstruction={removeInstruction} />
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
