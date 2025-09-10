import { SERVER_API_URL } from "../lib/constants";

export async function getOwnRecipes({ signal, pagination = {}, author, isArchive = false }) {
    const result = await fetch(`${SERVER_API_URL}/recipes/getRecipes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        signal,
        credentials: "include",
        body: JSON.stringify({
            pagination,
            author,
            isArchive
        })
    });

    const responseData = await result.json();

    if (result.ok) {
        return responseData;
    } else {
        throw new Error(responseData.error || "Something went wrong");
    }
}
