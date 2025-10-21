import { customTryCatchWrapper, customFetch, formDataToObject } from '../lib/utilities';

async function getMoreMessagesAction({ request }) {
    const formData = await request.formData();
    const data = formDataToObject(formData);
    const url = 'messages/getMessages';

    const result = await customTryCatchWrapper(() => {
        return customFetch({
            url,
            data,
            method: request.method
        });
    });

    return result;
}

export default getMoreMessagesAction;
