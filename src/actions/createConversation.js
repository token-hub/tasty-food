import { customTryCatchWrapper, customFetch, formDataToObject } from "../lib/utilities";

async function createConversationAction({ request }) {
    const formData = await request.formData();
    const data = formDataToObject(formData);
    const url = "conversations";

    const result = await customTryCatchWrapper(() => {
        return customFetch({
            url,
            data,
            method: request.method
        });
    });

    return result;
}

export default createConversationAction;
