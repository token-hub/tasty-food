import { SERVER_API_URL } from "../lib/constants";

export async function getRecipesTotalCount({ signal, author, isArchive = false }) {
    let query = `?isArchive=${isArchive}`;
    if (author?.userId) {
        query += `&authorId=${author.userId}`;
    }
    const result = await fetch(`${SERVER_API_URL}/recipes/getRecipes/totalCount${query}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        signal,
        credentials: "include"
    });

    const responseData = await result.json();

    if (result.ok) {
        return responseData;
    } else {
        throw new Error(responseData.error || "Something went wrong");
    }
}
