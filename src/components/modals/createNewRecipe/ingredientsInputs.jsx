import React from "react";
import XIcon from "../../../assets/icons/xIcon";

function IngredientsInputs({ id, removeIngredient, count }) {
    return (
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
            {count > 0 && (
                <button type="button" onClick={() => removeIngredient(id)} className="btn text-secondary mb-3">
                    <XIcon />
                </button>
            )}
        </div>
    );
}

export default IngredientsInputs;
