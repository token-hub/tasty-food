import { useFetcher } from "react-router";
import { useToastStore } from "../stores/useToastStore";
import { useEffect } from "react";
import { queryClient } from "../lib/queryClient";

export function useMarkUnreadMessagesFetcher(selectedConvo) {
    const fetcher = useFetcher();
    const createToast = useToastStore((state) => state.createToast);

    useEffect(() => {
        if (fetcher.data?.error) {
            createToast({ headerText: "Server Error", bodyText: fetcher?.data?.error, isSuccess: false });
        }

        if (fetcher.data?.result) {
            if (fetcher.data.result === "success") {
                queryClient.invalidateQueries({ queryKey: ["chat", "conversations"] });
            }
        }
    }, [fetcher.data, createToast, selectedConvo]);

    return { fetcher };
}
