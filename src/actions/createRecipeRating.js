import { customTryCatchWrapper, customFetch, formDataToObject } from "../lib/utilities";
import { queryClient } from "../lib/queryClient";

async function createRecipeRatingAction({ request }) {
    const formData = await request.formData();
    const data = formDataToObject(formData);

    const result = await customTryCatchWrapper(
        () => {
            return customFetch({
                url: "ratings",
                data
            });
        },
        async () => {
            await queryClient.invalidateQueries({ queryKey: ["recipes", "single"], exact: true });
            await queryClient.invalidateQueries({ queryKey: ["rating"], exact: true });
        }
    );

    return result;
}

export default createRecipeRatingAction;
