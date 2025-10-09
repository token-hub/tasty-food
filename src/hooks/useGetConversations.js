import { useQuery } from "@tanstack/react-query";
import { usePagination } from "./usePagination";
import { getConversations } from "../queries/getConversations";
import { useEffect } from "react";
import { useChatStore } from "../stores/useChatStore";

export function useGetConversations(user, isOpen, scrollsAtBottom) {
    const { pagination, setPagination } = usePagination({ limit: 8 });
    const setConversations = useChatStore((state) => state.setConversations);
    const conversations = useChatStore((state) => state.conversations);

    const isOpenAndTheresUser = isOpen && user?.id;
    const isInitialLoad = isOpenAndTheresUser && conversations.length == 0;
    const userScrollsDown = isOpenAndTheresUser && scrollsAtBottom;

    const { data: { details = [] } = {}, isLoading } = useQuery({
        queryKey: ["chat", "conversations"],
        queryFn: ({ signal }) => getConversations({ signal, userId: user?.id, pagination }),
        enabled: isInitialLoad || userScrollsDown
    });

    useEffect(() => {
        if (details.length && !isLoading) {
            setConversations(details);
            setPagination((prev) => ({ ...prev, cursor: details[0].updatedAt }));
        }
    }, [details, isLoading, setConversations, setPagination]);

    return { isLoading };
}
