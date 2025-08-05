import { createContext, useContext, useState } from "react";

const RecipeContext = createContext({
    recipe: {},
    setCurrentRecipe: () => {}
});

export function useRecipeContext() {
    return useContext(RecipeContext);
}

function RecipeProvider({ children }) {
    const [recipe, setRecipe] = useState({});

    function setCurrentRecipe(recipe) {
        setRecipe(recipe);
    }

    const values = {
        recipe,
        setCurrentRecipe
    };

    return <RecipeContext value={values}>{children}</RecipeContext>;
}

export default RecipeProvider;
