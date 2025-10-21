import { SERVER_API_URL } from '../lib/constants';

export async function getRatings({ signal, recipeId, pagination = {} }) {
    const result = await fetch(`${SERVER_API_URL}/ratings/getRatings`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        signal,
        credentials: 'include',
        body: JSON.stringify({
            pagination,
            recipeId
        })
    });

    const responseData = await result.json();

    if (result.ok) {
        return responseData;
    } else {
        throw new Error(responseData.error || 'Something went wrong');
    }
}
