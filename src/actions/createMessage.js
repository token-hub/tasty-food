import { customTryCatchWrapper, customFetch, formDataToObject } from "../lib/utilities";
import { queryClient } from "../lib/queryClient";

async function createMessageAction({ request }) {
    const formData = await request.formData();
    const data = formDataToObject(formData);
    const url = "messages";

    const result = await customTryCatchWrapper(
        () => {
            return customFetch({
                url,
                data,
                method: request.method
            });
        },
        async () => {
            await queryClient.invalidateQueries({ queryKey: ["chat", "conversations"], exact: true });
        }
    );

    return result;
}

export default createMessageAction;
