import { data, redirect } from "react-router";
import { SERVER_API_URL } from "../lib/constants";
import { queryClient } from "../lib/queryClient";

export async function signOutAction({ request }) {
    try {
        const result = await fetch(`${SERVER_API_URL}/auth/signOut`, {
            method: request.method,
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(data)
        });

        const responseData = await result.json();

        if (result.ok) {
            await queryClient.invalidateQueries({ queryKey: ["session"] });
            return redirect("/auth");
        } else {
            return data(
                {
                    error: responseData.error || "Something went wrong"
                },
                { status: result.status }
            );
        }
    } catch (error) {
        return data(
            {
                error: error?.message || "Something went wrong"
            },
            { status: 500 }
        );
    }
}
