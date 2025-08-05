import { useState, Fragment } from "react";
import IngredientsInputs from "./ingredientsInputs";

function Ingredients({ recipe }) {
    function generateInitialInputs(ingredients) {
        const newId = new Date().toISOString();

        if (ingredients?.length) {
            return ingredients.map((ingredient) => {
                const toPass = {
                    id: ingredient.name,
                    removeIngredient
                };
                return {
                    id: ingredient.name,
                    ingredient,
                    toPass
                };
            });
        }

        return [
            {
                id: newId,
                ingredient: {},
                toPass: { id: newId, removeIngredient }
            }
        ];
    }

    const initialInputs = generateInitialInputs(recipe.ingredients);
    const [inputs, setInputs] = useState(initialInputs);

    function addIngredient() {
        const newId = new Date().toISOString();
        setInputs((inputs) => {
            return [
                ...inputs,
                {
                    id: newId,
                    ingredient: {},
                    toPass: { id: newId, removeIngredient }
                }
            ];
        });
    }

    function removeIngredient(id) {
        setInputs((inputs) => {
            return inputs.filter((input) => input.id !== id);
        });
    }

    return (
        <>
            <span className="d-block mb-3 mt-4">Ingredients:</span>

            {inputs.map(({ id, ingredient, toPass }) => {
                return (
                    <Fragment key={id}>
                        <IngredientsInputs {...ingredient} {...toPass} />
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
