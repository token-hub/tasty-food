import { queryClient } from "../lib/queryClient";
import { customTryCatchWrapper, customFetch, formDataToObject } from "../lib/utilities";

export async function markAsReadNotificationAction({ request }) {
    const formData = await request.formData();
    const data = formDataToObject(formData);
    const url = `notifications/${data.notificationId}`;

    const result = await customTryCatchWrapper(
        () => {
            return customFetch({
                url,
                method: request.method
            });
        },
        () => {
            queryClient.invalidateQueries({ queryKey: ["notifications"] });
        }
    );

    return result;
}
