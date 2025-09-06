import XIcon from "../../../assets/icons/xIcon";

function IngredientsInputs({ quantity, unit, name, id, onChange, removeIngredient }) {
    return (
        <div className="d-flex w-100 align-items-center h-100">
            <div className="form-floating w-100">
                <input
                    type="number"
                    className="form-control mb-3"
                    id="quantity"
                    parentid={id}
                    parenttype="ingredient"
                    name="quantity"
                    defaultValue={quantity}
                    placeholder="1"
                    onChange={onChange}
                />
                <label htmlFor="quantity">Quantity</label>
            </div>
            <div className="form-floating w-100">
                <input
                    type="text"
                    className="form-control mb-3"
                    id="unit"
                    parentid={id}
                    parenttype="ingredient"
                    name="unit"
                    defaultValue={unit}
                    placeholder="1"
                    onChange={onChange}
                />
                <label htmlFor="unit">Unit</label>
            </div>
            <div className="form-floating w-100">
                <input
                    type="text"
                    className="form-control mb-3"
                    id="ingredient"
                    parenttype="ingredient"
                    parentid={id}
                    name="ingredient"
                    defaultValue={name}
                    placeholder="1"
                    onChange={onChange}
                />
                <label htmlFor="ingredient">Ingredient</label>
            </div>
            <button type="button" onClick={() => removeIngredient(id)} className="btn text-secondary mb-3">
                <XIcon />
            </button>
        </div>
    );
}

export default IngredientsInputs;
