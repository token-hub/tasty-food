import { queryClient } from "../lib/queryClient";
import { customFetch, customTryCatchWrapper } from "../lib/utilities";
import { data as responseData } from "react-router";

export async function emailVerificationAction({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    if (!data.email) {
        return responseData(
            { error: "Email is required" },
            {
                status: 400
            }
        );
    }

    return await customTryCatchWrapper(
        () => {
            return customFetch({
                url: "auth/sendEmailVerification",
                data
            });
        },
        () => {
            queryClient.invalidateQueries({ queryKey: ["session"] });
        },
        "/me/profile"
    );
}
