import { useQuery } from "@tanstack/react-query";
import { usePagination } from "./usePagination";
import { getConversations } from "../queries/getConversations";
import { useEffect } from "react";
import { useChatStore } from "../stores/useChatStore";

export function useGetConversations(user, isOpen) {
    const { pagination } = usePagination();
    const setConversations = useChatStore((state) => state.setConversations);

    const { data: { details = [] } = {}, isLoading } = useQuery({
        queryKey: ["chat", "conversations"],
        queryFn: ({ signal }) => getConversations({ signal, userId: user?.id, pagination }),
        enabled: Boolean(isOpen && user?.id)
    });

    useEffect(() => {
        if (details.length && !isLoading) {
            setConversations(details);
        }
    }, [details, isLoading, setConversations]);

    return { isLoading };
}
