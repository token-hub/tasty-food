function RecipeIngredients({ recipe }) {
    return (
        <>
            <h3>Ingredients</h3>
            <ul class="list-group list-group-flush">
                {recipe.ingredients.length &&
                    recipe.ingredients.map(({ name, quantity, unit }, index) => (
                        <li key={index} class="list-group-item py-1 lead">
                            <input class="form-check-input me-2" type="checkbox" value="" id={index} />
                            <label class="form-check-label stretched-link" for={index}>
                                {quantity} {unit} of {name}
                            </label>
                        </li>
                    ))}
            </ul>
        </>
    );
}

export default RecipeIngredients;
