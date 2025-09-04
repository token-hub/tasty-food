import { queryClient } from "../lib/queryClient";
import { customFetch, customTryCatchWrapper } from "../lib/utilities";

export async function emailVerification({ request }) {
    const fields = await request.formData();

    if (!fields.email) return;

    return customTryCatchWrapper(
        () => {
            return customFetch({
                url: "auth/sendEmailVerification",
                data: fields
            });
        },
        () => {
            queryClient.invalidateQueries({ queryKey: ["session"] });
        }
    );
}
