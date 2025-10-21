import { createContext, useContext, useState } from 'react';

const RecipeFilterContext = createContext({
    filters: [],
    query: '',
    handlefilter: () => {}
});

export function useRecipeFilterContext() {
    return useContext(RecipeFilterContext);
}

function RecipeFilterProvider({ children }) {
    const [filters, setFilterRecipe] = useState([]);
    const [query, setQuery] = useState('');

    function handlefilter(filter) {
        setFilterRecipe((prev) => {
            let newfilters = [...prev];
            const isExist = prev.some((p) => p == filter);
            if (isExist) {
                newfilters = newfilters.filter((f) => f != filter);
            } else {
                newfilters.push(filter);
            }
            return newfilters;
        });
    }

    const values = {
        query,
        setQuery,
        filters,
        handlefilter
    };

    return <RecipeFilterContext value={values}>{children}</RecipeFilterContext>;
}

export default RecipeFilterProvider;
