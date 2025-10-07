import { useEffect, useEffectEvent } from "react";
import { useChatStore } from "../stores/useChatStore";
import { useFetcher } from "react-router";
import { useSocketStore } from "../stores/useSocketStore";
import { useUserStore } from "../stores/useUserStore";

export function useSendMessageFetcher() {
    const selectedConvo = useChatStore((state) => state.selectedConvo);
    const updateSelectedConvo = useChatStore((state) => state.updateSelectedConvo);
    const fetcher = useFetcher();
    const socket = useSocketStore((state) => state.socket);
    const user = useUserStore((state) => state.user);

    const removeOptimisticData = useEffectEvent(() => {
        const hasOptimisticData = selectedConvo.messages.some((m) => !m.messageId);
        if (hasOptimisticData) {
            updateSelectedConvo((prev) => ({
                ...prev,
                messages: prev.messages.filter((m) => m.messageId)
            }));
        }
    });
    const updateAndEmitMessageEvent = useEffectEvent(() => {
        const newMessage = fetcher?.data?.result[0];
        const messageId = newMessage._id;
        const exist = selectedConvo.messages.some((m) => m.messageId === messageId || m._id === messageId);
        if (!exist) {
            socket.emit("private-message", {
                to: selectedConvo.participants.find((p) => p.userId != user?.id)?.userId,
                from: user?.id,
                message: newMessage
            });
            updateSelectedConvo((prev) => ({
                ...prev,
                messages: prev.messages.map((m) => {
                    if (!m._id) {
                        return { ...m, ...newMessage };
                    } else {
                        return m;
                    }
                })
            }));
        }
    });

    useEffect(() => {
        if (fetcher.data?.error) {
            removeOptimisticData();
        }

        if (fetcher?.data?.result) {
            updateAndEmitMessageEvent();
        }
    }, [fetcher.data]);

    return { user, selectedConvo, updateSelectedConvo, fetcher };
}
