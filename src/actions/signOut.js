import { queryClient } from "../lib/queryClient";
import { customFetch, customTryCatchWrapper } from "../lib/utilities";

async function signOutAction() {
    return await customTryCatchWrapper(
        () => {
            return customFetch({
                url: "auth/signOut"
            });
        },
        () => {
            queryClient.invalidateQueries({ queryKey: ["session"] });
        },
        "/auth"
    );
}

export default signOutAction;
