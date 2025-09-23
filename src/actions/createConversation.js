import { customTryCatchWrapper, customFetch, formDataToObject } from "../lib/utilities";
import { queryClient } from "../lib/queryClient";

export async function createConversationAction({ request }) {
    const formData = await request.formData();
    const data = formDataToObject(formData);
    const url = "conversations";

    const result = await customTryCatchWrapper(
        () => {
            return customFetch({
                url,
                data,
                method: request.method
            });
        },
        async () => {
            // await queryClient.invalidateQueries({ queryKey: ["recipes"] });
        }
    );

    return result;
}
