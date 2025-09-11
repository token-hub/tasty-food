import { createContext, useContext, useState } from "react";

const RecipeFilterContext = createContext({
    filter: [],
    setFilterRecipe: () => {}
});

export function useRecipeFilterContext() {
    return useContext(RecipeFilterContext);
}

function RecipeFilterProvider({ children }) {
    const [filter, setFilterRecipe] = useState([]);

    function handlefilter(filter) {
        setFilterRecipe((prev) => {
            let filters = [...prev];
            const isExist = prev.some((p) => p == filter);
            if (isExist) {
                filters = filters.filter((f) => f != filter);
            } else {
                filters.push(filter);
            }
            return filters;
        });
    }

    const values = {
        filter,
        handlefilter
    };

    return <RecipeFilterContext value={values}>{children}</RecipeFilterContext>;
}

export default RecipeFilterProvider;
