function RecipeInstructions({ recipe }) {
    return (
        <>
            <h3>Instructions</h3>
            <ol class="list-group list-group-flush list-group-numbered">
                {recipe.instructions.length &&
                    recipe.instructions.map((instruction, index) => (
                        <li key={index} class="list-group-item lead py-1">
                            {instruction}
                        </li>
                    ))}
            </ol>
        </>
    );
}

export default RecipeInstructions;
