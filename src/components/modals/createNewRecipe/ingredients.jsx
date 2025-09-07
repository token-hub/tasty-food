import { Fragment, useEffect } from "react";
import { generateInput } from "../../../lib/utilities";
import IngredientsInputs from "./ingredientsInputs";
import { useIngredients } from "../../../hooks/useIngredients";

function Ingredients({ recipe, onChange }) {
    const { inputs, setInputs, addIngredient, removeIngredient } = useIngredients(onChange);

    useEffect(() => {
        if (!inputs.length) {
            const initialInputs = generateInput(recipe.ingredients);
            setInputs(initialInputs);
            onChange({ target: { name: "ingredients", value: initialInputs } });
        }
    }, [inputs, setInputs, recipe, onChange]);

    return (
        <>
            <span className="d-block mb-3 mt-4">Ingredients:</span>

            {inputs.map((data) => {
                return (
                    <Fragment key={data.id}>
                        <IngredientsInputs {...data} setInputs={setInputs} onChange={onChange} removeIngredient={removeIngredient} />
                    </Fragment>
                );
            })}
            <button onClick={addIngredient} type="button" className="btn border-0">
                <span className="fs-7 text-muted my-3">Add more Ingredients ?</span>
            </button>
        </>
    );
}

export default Ingredients;
