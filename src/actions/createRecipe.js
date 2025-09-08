import { customTryCatchWrapper, customFetch, formDataToObject } from "../lib/utilities";
import { queryClient } from "../lib/queryClient";

export async function createRecipeAction({ request }) {
    const formData = await request.formData();
    const data = formDataToObject(formData);
    const method = data?.recipeId ? "PUT" : "POST";
    const url = data?.recipeId ? "recipes/" + data.recipeId : "recipes";
    return await customTryCatchWrapper(
        () => {
            return customFetch({
                url,
                data,
                method
            });
        },
        () => {
            queryClient.invalidateQueries({ queryKey: ["myRecipes"] });
        }
    );
}
