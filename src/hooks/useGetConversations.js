import { useQuery } from "@tanstack/react-query";
import { usePagination } from "./usePagination";
import { getConversations } from "../queries/getConversations";
import { useEffect } from "react";
import { useChatStore } from "../stores/useChatStore";
import { useUserStore } from "../stores/useUserStore";

export function useGetConversations(scrollsAtBottom) {
    const { pagination, setPagination } = usePagination({ limit: 10 });
    const user = useUserStore((state) => state.user);
    const openChat = useChatStore((state) => state.openChat);
    const openChatSmall = useChatStore((state) => state.openChatSmall);
    const isOpen = openChatSmall ? openChatSmall : openChat;
    const setConversations = useChatStore((state) => state.setConversations);

    const isOpenAndTheresUser = isOpen && user?.id;
    const userScrollsDown = isOpenAndTheresUser && scrollsAtBottom;

    const { data: { details = [] } = {}, isLoading } = useQuery({
        queryKey: ["chat", "conversations"],
        queryFn: ({ signal }) => getConversations({ signal, userId: user?.id, pagination }),
        enabled: Boolean(isOpenAndTheresUser) || userScrollsDown
    });

    useEffect(() => {
        if (details.length && !isLoading) {
            if (scrollsAtBottom) {
                setConversations((conversations) => [...conversations, ...details]);
                setPagination((prev) => ({ ...prev, cursor: details[0].updatedAt }));
            } else {
                setConversations(() => details);
            }
        }
    }, [details, isLoading, setConversations, scrollsAtBottom, setPagination]);

    return { isLoading, user };
}
