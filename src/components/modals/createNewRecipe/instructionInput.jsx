import XIcon from "../../../assets/icons/xIcon";

function InstructionInput({ instruction, id, index, onChange, removeInstruction }) {
    return (
        <div className="d-flex">
            <div className="form-floating w-100">
                <input
                    type="text"
                    className="form-control mb-3"
                    id={id}
                    name="instruction"
                    defaultValue={instruction}
                    onChange={onChange}
                    placeholder="1"
                />
                <label htmlFor="unit">{`instruction #${index + 1}`}</label>
            </div>
            <button type="button" className="btn text-secondary mb-3" onClick={() => removeInstruction(id)}>
                <XIcon />
            </button>
        </div>
    );
}

export default InstructionInput;
