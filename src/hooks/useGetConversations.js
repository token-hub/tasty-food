import { useQuery } from "@tanstack/react-query";
import { usePagination } from "./usePagination";
import { getConversations } from "../queries/getConversations";
import { useEffect } from "react";
import { useChatStore } from "../stores/useChatStore";
import { useUserStore } from "../stores/useUserStore";

export function useGetConversations() {
    const { pagination, setPagination } = usePagination({ limit: 10 });
    const user = useUserStore((state) => state.user);
    const openChat = useChatStore((state) => state.openChat);
    const openChatSmall = useChatStore((state) => state.openChatSmall);
    const isOpen = openChatSmall ? openChatSmall : openChat;
    const setConversations = useChatStore((state) => state.setConversations);
    const conversations = useChatStore((state) => state.conversations);

    const isOpenAndTheresUser = isOpen && user?.id;

    const { data: { details = [] } = {}, isLoading } = useQuery({
        queryKey: ["chat", "conversations"],
        queryFn: ({ signal }) => getConversations({ signal, userId: user?.id, pagination }),
        enabled: Boolean(isOpenAndTheresUser)
    });

    useEffect(() => {
        if (details.length && !isLoading) {
            const isExist = conversations.some((convo) => convo._id === details[0]._id);
            if (!isExist) {
                setConversations((conversations) => [...conversations, ...details]);
                setPagination((prev) => ({ ...prev, cursor: details[details.length - 1].updatedAt }));
            }
        }
    }, [details, isLoading, setConversations, conversations, setPagination]);

    return { isLoading, user };
}
