import { customTryCatchWrapper, customFetch, formDataToObject } from "../lib/utilities";

export async function markUnreadMessagesAction({ request }) {
    const formData = await request.formData();
    const data = formDataToObject(formData);
    const url = `conversations/${data.conversationId}/markUnreadMessages`;

    const result = await customTryCatchWrapper(() => {
        return customFetch({
            url,
            data: { userId: data.userId },
            method: request.method
        });
    });

    return result;
}
