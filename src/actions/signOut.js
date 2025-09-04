import { queryClient } from "../lib/queryClient";
import { customFetch, customTryCatchWrapper } from "../lib/utilities";

export function signOutAction() {
    return customTryCatchWrapper(
        () => {
            customFetch({
                url: "auth/signOut"
            });
        },
        () => {
            queryClient.invalidateQueries({ queryKey: ["session"] });
        }
    );
}
