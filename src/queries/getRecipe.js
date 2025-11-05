import { SERVER_API_URL } from '../lib/constants';

export async function getRecipe({ signal, recipeId }) {
    const result = await fetch(`${import.meta.env.VITE_SERVER_URL}/recipes/${recipeId}`, {
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
