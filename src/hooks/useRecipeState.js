import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getRecipe } from "../queries/getRecipe";
import { DEFAULT_RECIPE_STATE } from "../lib/constants";
import { useState } from "react";

export function useRecipeState() {
    const { recipeId } = useParams();

    const { data } = useQuery({
        queryKey: ["recipe"],
        queryFn: ({ signal }) => getRecipe({ signal, recipeId }),
        enabled: Boolean(recipeId)
    });
    const initialState = data?.details ?? DEFAULT_RECIPE_STATE;
    const [recipeState, setRecipeState] = useState(initialState);

    return { recipeState, setRecipeState, recipeId, data, initialState };
}
