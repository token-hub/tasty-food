import XIcon from "../../../assets/icons/xIcon";
function InstructionInput({ id, removeInstruction, count, index }) {
    return (
        <div className="d-flex">
            <div className="form-floating w-100">
                <input type="text" className="form-control mb-3" id="unit" placeholder="1" />
                <label htmlFor="unit">{`instruction #${index + 1}`}</label>
            </div>
            {count > 0 && (
                <button type="button" className="btn text-secondary mb-3" onClick={() => removeInstruction(id)}>
                    <XIcon />
                </button>
            )}
        </div>
    );
}

export default InstructionInput;
