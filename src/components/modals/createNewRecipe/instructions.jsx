import { Fragment, useEffect } from "react";
import { generateInput } from "../../../lib/utilities";
import InstructionInput from "./instructionInput";
import { useInstructions } from "../../../hooks/useInstructions";

function Instructions({ recipe, onChange }) {
    const { inputs, setInputs, addInstruction, removeInstruction } = useInstructions(onChange);

    useEffect(() => {
        if (!inputs.length) {
            const initialInputs = generateInput(recipe.instructions, false);
            setInputs(initialInputs);
            onChange({ target: { name: "instructions", value: initialInputs } });
        }
    }, [inputs, setInputs, recipe, onChange]);

    return (
        <>
            <span className="d-block mb-3 mt-4">Instructions:</span>
            {inputs.map((data, index) => {
                return (
                    <Fragment key={data.id}>
                        <InstructionInput index={index} {...data} onChange={onChange} removeInstruction={removeInstruction} />
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
