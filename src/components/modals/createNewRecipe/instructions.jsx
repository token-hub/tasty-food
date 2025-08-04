import XIcon from "../../../assets/icons/xIcon";

function Instructions() {
    return (
        <>
            <span className="d-block mb-3 mt-4">Instructions:</span>
            <div className="d-flex">
                <div className="form-floating w-100">
                    <input type="text" className="form-control mb-3" id="unit" placeholder="1" />
                    <label htmlFor="unit">{`instruction #1`}</label>
                </div>
                <button className="btn text-secondary mb-3">
                    <XIcon />
                </button>
            </div>
            <button type="button" className="btn border-0">
                <span className="fs-7 text-muted my-3">Add more Instruction ?</span>
            </button>
        </>
    );
}

export default Instructions;
