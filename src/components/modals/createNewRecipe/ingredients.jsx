import XIcon from "../../../assets/icons/xIcon";

function Ingredients() {
    return (
        <>
            <span className="d-block mb-3 mt-4">Ingredients:</span>

            <div className="d-flex w-100 align-items-center h-100">
                <div className="form-floating w-100">
                    <input type="number" min="0" className="form-control mb-3" id="quantity" placeholder="1" />
                    <label htmlFor="quantity">Quantity</label>
                </div>
                <div className="form-floating w-100">
                    <input type="text" className="form-control mb-3" id="unit" placeholder="1" />
                    <label htmlFor="unit">Unit</label>
                </div>
                <div className="form-floating w-100">
                    <input type="text" className="form-control mb-3" id="ingredient" placeholder="1" />
                    <label htmlFor="ingredient">Ingredient</label>
                </div>
                <button className="btn text-secondary mb-3">
                    <XIcon />
                </button>
            </div>
            <button type="button" className="btn border-0">
                <span className="fs-7 text-muted my-3">Add more Ingredients ?</span>
            </button>
        </>
    );
}

export default Ingredients;
