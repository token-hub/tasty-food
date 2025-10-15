import { customFetch, customTryCatchWrapper } from "../lib/utilities";
import { data as responseData } from "react-router";

async function resetPasswordAction({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());
    let errors = [];

    if (!data.password || !data["confirm-password"]) {
        errors.push("New password and confirm password must not be empty ");
    }

    if (data.password && data["confirm-password"] && data.password !== data["confirm-password"]) {
        errors.push("New password and confirm password must match");
    }

    if (errors.length) {
        return responseData(
            { errors },
            {
                status: 400
            }
        );
    }

    return await customTryCatchWrapper(() => {
        return customFetch({
            url: "auth/resetPassword",
            data
        });
    });
}

export default resetPasswordAction;
