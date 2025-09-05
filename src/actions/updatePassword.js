import { customFetch, customTryCatchWrapper } from "../lib/utilities";
import { data as responseData } from "react-router";

export async function updatePasswordAction({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    let errors = [];

    if (!data.password || !data.confirmPassword || !data.oldPassword) {
        errors.push("All password must not be empty ");
    }

    if (data.password && data.confirmPassword && data.password !== data.confirmPassword) {
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
            url: "auth/changePassword",
            data
        });
    });
}
