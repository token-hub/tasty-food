import { useEffect } from "react";
import { useChatStore } from "../stores/useChatStore";
import { useFetcher } from "react-router";
import { useSocketStore } from "../stores/useSocketStore";
import { useUserStore } from "../stores/useUserStore";

export function useSendMessageFetcher(ref) {
    const selectedConvo = useChatStore((state) => state.selectedConvo);
    const updateSelectedConvo = useChatStore((state) => state.updateSelectedConvo);
    const fetcher = useFetcher();
    const socket = useSocketStore((state) => state.socket);
    const user = useUserStore((state) => state.user);

    useEffect(() => {
        if (fetcher.data?.error && selectedConvo) {
            const hasOptimisticData = selectedConvo.messages.some((m) => !m.messageId);
            if (hasOptimisticData) {
                updateSelectedConvo((prev) => ({
                    ...prev,
                    messages: prev.messages.filter((m) => m.messageId)
                }));
            }
        }

        if (fetcher?.data?.result && fetcher.state === "idle" && selectedConvo) {
            ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
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
        }
    }, [fetcher, ref, socket, selectedConvo, updateSelectedConvo, user?.id]);

    return { user, selectedConvo, updateSelectedConvo, fetcher };
}
