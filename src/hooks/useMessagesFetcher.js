import { useFetcher } from "react-router";
import { useToastStore } from "../stores/useToastStore";
import { useEffect, useEffectEvent } from "react";
import { usePagination } from "./usePagination";
import { useChatStore } from "../stores/useChatStore";

export function useMessagesFetcher(ref) {
    const { pagination, setPagination } = usePagination({ limit: 6 });
    const selectedConvo = useChatStore((state) => state.selectedConvo);
    const updateSelectedConvo = useChatStore((state) => state.updateSelectedConvo);
    const fetcher = useFetcher();
    const createToast = useToastStore((state) => state.createToast);

    const loadMessages = useEffectEvent((messages) => {
        const lastMessage = messages[0];
        const exist = messages.every((m) => selectedConvo.messages.find((im) => im._id == m._id));

        if (!exist) {
            setPagination((prev) => {
                return { ...prev, cursor: lastMessage.updatedAt };
            });

            if (selectedConvo) {
                updateSelectedConvo((prev) => ({
                    ...prev,
                    messages: [...messages, ...prev.messages]
                }));
            }
        } else {
            if (fetcher.state !== "idle") {
                ref.current.scrollTop = 500;
            }
        }
    });

    useEffect(() => {
        if (fetcher?.data?.error) {
            createToast({ headerText: "Server Error", bodyText: fetcher?.data?.error, isSuccess: false });
        }

        if (fetcher?.data?.result && fetcher?.data?.result.length) {
            loadMessages(fetcher?.data?.result.reverse());
        }
    }, [fetcher, createToast]);

    return { fetcher, pagination, selectedConvo };
}
