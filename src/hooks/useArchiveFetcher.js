import { useFetcher } from "react-router";
import { useToastContext } from "../providers/toastProvider";
import { useEffect } from "react";

export function useArchiveFetcher() {
    const fetcher = useFetcher();
    const { createToast } = useToastContext();

    useEffect(() => {
        if (fetcher?.data?.error) {
            createToast({ headerText: "Server Error", bodyText: fetcher?.data?.error, isSuccess: false });
        }

        if (fetcher?.data?.result) {
            createToast({ headerText: "Recipe Unarchived", bodyText: "You have successfully unarchived a recipe" });
        }
    }, [fetcher, createToast]);

    return { fetcher };
}
