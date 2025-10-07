import { useFetcher } from "react-router";
import { useToastStore } from "../stores/useToastStore";
import { useEffect } from "react";

export function useArchiveFetcher() {
    const fetcher = useFetcher();
    const createToast = useToastStore((state) => state.createToast);

    useEffect(() => {
        if (fetcher?.data?.error) {
            createToast({ headerText: "Server Error", bodyText: fetcher?.data?.error, isSuccess: false });
        }

        if (fetcher?.data?.result) {
            createToast({
                headerText: `Recipe ${fetcher?.data?.result?.isArchive ? "Archived" : "Unarchived"}`,
                bodyText: `You have successfully ${fetcher?.data?.result?.isArchive ? "archived" : "unarchived"}  a recipe`
            });
        }
    }, [fetcher, createToast]);

    return { fetcher };
}
