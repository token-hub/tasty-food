import { customFetch, customTryCatchWrapper } from "../lib/utilities";

export async function forgotPasswordAction({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    return customTryCatchWrapper(() => {
        return customFetch({
            url: "auth/reset-password",
            data
        });
    });
}
