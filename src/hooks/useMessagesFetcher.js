import { useFetcher } from "react-router";
import { useToastStore } from "../stores/useToastStore";
import { useEffect } from "react";
import { usePagination } from "./usePagination";

export function useMessagesFetcher(selectedConvo, updateSelectedConvo) {
    const { pagination, setPagination } = usePagination();
    const fetcher = useFetcher();
    const createToast = useToastStore((state) => state.createToast);

    useEffect(() => {
        if (fetcher?.data?.error) {
            createToast({ headerText: "Server Error", bodyText: fetcher?.data?.error, isSuccess: false });
        }

        if (fetcher?.data?.result && fetcher?.data?.result.length) {
            const messages = fetcher?.data?.result;
            const lastMessage = messages[0];
            const exist = messages.every((m) => selectedConvo.messages.find((im) => im._id == m._id));

            if (!exist) {
                setPagination((prev) => {
                    return { ...prev, cursor: lastMessage.updatedAt };
                });

                if (selectedConvo) {
                    updateSelectedConvo({
                        messages: [...messages, ...selectedConvo.messages]
                    });
                }
            }
        }
    }, [fetcher, createToast, setPagination, selectedConvo, updateSelectedConvo]);

    return { fetcher, pagination };
}
