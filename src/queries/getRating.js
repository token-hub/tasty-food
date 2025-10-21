import { SERVER_API_URL } from '../lib/constants';

export async function getRating({ signal, recipeId, userId }) {
    const result = await fetch(`${SERVER_API_URL}/ratings/${recipeId}/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        signal,
        credentials: 'include'
    });

    const responseData = await result.json();

    if (result.ok) {
        return responseData;
    } else {
        throw new Error(responseData.error || 'Something went wrong');
    }
}
