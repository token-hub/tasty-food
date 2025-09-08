function RecipeInstructions({ recipe }) {
    return (
        <>
            <h3>Instructions</h3>
            <ol class="list-group list-group-flush list-group-numbered">
                {recipe.instructions.length > 0 &&
                    recipe.instructions.map((instruction) => (
                        <li key={instruction.id} class="list-group-item lead py-1">
                            {instruction.instruction}
                        </li>
                    ))}
            </ol>
        </>
    );
}

export default RecipeInstructions;
