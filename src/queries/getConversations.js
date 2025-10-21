import { SERVER_API_URL } from '../lib/constants';

export async function getConversations({ signal, userId, pagination = {} }) {
    const result = await fetch(`${SERVER_API_URL}/conversations/getConversations`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        signal,
        credentials: 'include',
        body: JSON.stringify({
            pagination,
            userId
        })
    });

    const responseData = await result.json();

    if (result.ok) {
        return responseData;
    } else {
        throw new Error(responseData.error || 'Something went wrong');
    }
}
