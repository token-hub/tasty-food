import { useFetcher } from "react-router";
import { useToastStore } from "../stores/useToastStore";
import { useEffect } from "react";
import { usePagination } from "./usePagination";
import { useChatStore } from "../stores/useChatStore";

export function useMessagesFetcher(ref) {
    const { pagination, setPagination } = usePagination();
    const selectedConvo = useChatStore((state) => state.selectedConvo);
    const updateSelectedConvo = useChatStore((state) => state.updateSelectedConvo);
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
            } else {
                ref.current.scrollTop = 500;
            }
        }
    }, [fetcher, createToast, setPagination, selectedConvo, updateSelectedConvo, ref]);

    return { fetcher, pagination, selectedConvo };
}
