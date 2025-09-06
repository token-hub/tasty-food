import { queryClient } from "../lib/queryClient";
import { getRecipes } from "../queries/getRecipes";

export async function recipeLoader() {
    const { data } = await queryClient.fetchQuery({
        queryKey: ["recipes"],
        queryFn: ({ signal }) => getRecipes({ signal })
    });

    return {
        recipes: data?.recipes
    };
}
