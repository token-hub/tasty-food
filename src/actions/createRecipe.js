import { customTryCatchWrapper, customFetch, formDataToObject } from "../lib/utilities";
import { queryClient } from "../lib/queryClient";

export async function createRecipeAction({ request }) {
    const formData = await request.formData();
    const data = formDataToObject(formData);

    return await customTryCatchWrapper(
        () => {
            return customFetch({
                url: "recipes",
                data
            });
        },
        () => {
            queryClient.invalidateQueries({ queryKey: ["myRecipes"] });
        }
    );
}
