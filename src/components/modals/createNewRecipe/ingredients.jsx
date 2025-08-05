import { useState, Fragment } from "react";
import IngredientsInputs from "./ingredientsInputs";

function Ingredients() {
    const [count, setCount] = useState(0);

    const initialInputs = [
        {
            id: count,
            component: IngredientsInputs
        }
    ];

    const [inputs, setInputs] = useState(initialInputs);

    function addIngredient() {
        setInputs([
            ...inputs,
            {
                id: count + 1,
                component: IngredientsInputs
            }
        ]);
        setCount((count) => count + 1);
    }

    function removeIngredient(id) {
        if (count > 0) {
            setCount((count) => count - 1);
            const filteredIngredients = inputs.filter((input) => input.id !== id);
            setInputs(filteredIngredients);
        }
    }

    return (
        <>
            <span className="d-block mb-3 mt-4">Ingredients:</span>

            {inputs.map(({ id, component }) => {
                let Component = component;
                return (
                    <Fragment key={id}>
                        <Component id={id} count={count} removeIngredient={removeIngredient} />
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
