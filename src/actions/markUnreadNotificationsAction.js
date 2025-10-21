import { queryClient } from '../lib/queryClient';
import { customTryCatchWrapper, customFetch, formDataToObject } from '../lib/utilities';

async function markUnreadNotificationsAction({ request }) {
    const formData = await request.formData();
    const data = formDataToObject(formData);
    const url = `notifications/markAllUnread/${data.userId}`;

    const result = await customTryCatchWrapper(
        () => {
            return customFetch({
                url,
                method: request.method
            });
        },
        () => {
            queryClient.invalidateQueries({ queryKey: ['notifications'] });
        }
    );

    return result;
}

export default markUnreadNotificationsAction;
