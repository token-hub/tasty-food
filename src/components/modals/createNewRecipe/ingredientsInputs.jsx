import React from "react";
import XIcon from "../../../assets/icons/xIcon";

function IngredientsInputs({ quantity, unit, name, id, removeIngredient }) {
    return (
        <div className="d-flex w-100 align-items-center h-100">
            <div className="form-floating w-100">
                <input type="text" className="form-control mb-3" id="quantity" defaultValue={quantity} placeholder="1" />
                <label htmlFor="quantity">Quantity</label>
            </div>
            <div className="form-floating w-100">
                <input type="text" className="form-control mb-3" id="unit" defaultValue={unit} placeholder="1" />
                <label htmlFor="unit">Unit</label>
            </div>
            <div className="form-floating w-100">
                <input type="text" className="form-control mb-3" id="ingredient" defaultValue={name} placeholder="1" />
                <label htmlFor="ingredient">Ingredient</label>
            </div>
            <button type="button" onClick={() => removeIngredient(id)} className="btn text-secondary mb-3">
                <XIcon />
            </button>
        </div>
    );
}

export default IngredientsInputs;
