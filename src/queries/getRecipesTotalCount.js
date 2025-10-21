import { SERVER_API_URL } from '../lib/constants';

export async function getRecipesTotalCount({
    signal,
    author,
    isArchive = false,
    filters = { categories: [] },
    query = ''
}) {
    let queries = `?isArchive=${isArchive}&filters=${JSON.stringify(filters.categories)}`;
    if (author?.userId) {
        queries += `&authorId=${author.userId}`;
    }
    if (query) {
        queries += `&query=${query}`;
    }

    const result = await fetch(`${SERVER_API_URL}/recipes/getRecipes/totalCount${queries}`, {
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
