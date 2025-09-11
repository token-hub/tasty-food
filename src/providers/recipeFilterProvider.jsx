import { createContext, useContext, useState } from "react";

const RecipeFilterContext = createContext({
    recipe: {},
    setCurrentRecipe: () => {}
});

export function useRecipeFilterContext() {
    return useContext(RecipeFilterContext);
}

function RecipeFilterProvider({ children }) {
    const [filter, setFilterRecipe] = useState({});

    function handlefilter(recipe) {
        setFilterRecipe(recipe);
    }

    const values = {
        filter,
        handlefilter
    };

    return <RecipeFilterContext value={values}>{children}</RecipeFilterContext>;
}

export default RecipeFilterProvider;
