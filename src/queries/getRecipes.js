import { SERVER_API_URL } from '../lib/constants';

export async function getRecipes({ signal, pagination = {}, filters = { categories: [] }, query = '' }) {
    const result = await fetch(`${import.meta.env.VITE_SERVER_URL}/recipes/getRecipes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        signal,
        credentials: 'include',
        body: JSON.stringify({
            pagination,
            filters,
            query
        })
    });

    const responseData = await result.json();

    if (result.ok) {
        return responseData;
    } else {
        throw new Error(responseData.error || 'Something went wrong');
    }
}
