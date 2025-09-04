import { data } from "react-router";
import { SERVER_API_URL } from "../lib/constants";
import { queryClient } from "../lib/queryClient";

export async function emailVerification({ request }) {
    try {
        const fields = await request.formData();

        if (!fields.email) return;

        const result = await fetch(`${SERVER_API_URL}/auth/sendEmailVerification`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(fields)
        });
        await queryClient.invalidateQueries({ queryKey: ["session"] });
        await result.json();
    } catch (error) {
        return data(
            {
                error: error?.message || "Something went wrong"
            },
            { status: 500 }
        );
    }
}
