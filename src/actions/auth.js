import { SERVER_API_URL } from "../lib/constants";
import { data as reponseData } from "react-router";

async function AuthAction({ request, params }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    const isSignUp = data.confirmPassword;
    const urlPostFix = isSignUp ? "signUp" : "login";

    try {
        const result = await fetch(`${SERVER_API_URL}/auth/${urlPostFix}`, {
            method: request.method,
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(data)
        });

        const responseData = await result.json();

        if (result.ok) {
            return { user: responseData };
            // set the current user in the authProvider
            // add a toast
        } else {
            return reponseData(
                {
                    error: responseData.error || "Something went wrong"
                },
                { status: result.status }
            );
        }
    } catch (error) {
        return reponseData(
            {
                error: "Something went wrong"
            },
            { status: 500 }
        );
    }
}

export default AuthAction;
