import { customFetch, customTryCatchWrapper } from "../lib/utilities";
import { queryClient } from "../lib/queryClient";
import { data as responseData } from "react-router";

async function updateUserAction({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    if (!data.name) {
        return responseData(
            { error: "Name must not be empty" },
            {
                status: 400
            }
        );
    }

    return await customTryCatchWrapper(
        () => {
            return customFetch({
                url: "auth/updateUser",
                data
            });
        },
        () => {
            queryClient.invalidateQueries({ queryKey: ["session"] });
        }
    );
}

export default updateUserAction;
