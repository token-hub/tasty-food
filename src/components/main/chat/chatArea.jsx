import { useEffect, useRef, useState } from "react";
import SendIcon from "../../../assets/icons/sendIcon";
import { useFetcher } from "react-router";
import { objectToFormData } from "../../../lib/utilities";
import { useUserStore } from "../../../stores/useUserStore";
import { useChatStore } from "../../../stores/useChatStore";
import { useSocketStore } from "../../../stores/useSocketStore";

function ChatArea({ bottomRef }) {
    const chatRef = useRef();

    const user = useUserStore((state) => state.user);
    const selectedConvo = useChatStore((state) => state.selectedConvo);
    const fetcher = useFetcher();
    const updateSelectedConvo = useChatStore((state) => state.updateSelectedConvo);
    const socket = useSocketStore((state) => state.socket);

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
            bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
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
    }, [fetcher, bottomRef, socket, selectedConvo, updateSelectedConvo, user?.id]);

    function handleSend() {
        const newMessage = {
            message: chatRef.current.value,
            userId: user?.id,
            recipeId: selectedConvo.recipes.find((r) => r.isLatest).recipeId,
            conversationId: selectedConvo._id,
            isReadBy: [user.id]
        };

        const messages = [...selectedConvo.messages];
        newMessage.updatedAt = new Date();
        messages.push(newMessage);
        updateSelectedConvo((prev) => ({ ...prev, messages }));

        fetcher.submit(objectToFormData(newMessage), {
            action: "/:authorId/recipes/:recipeId/createMessage",
            method: "POST"
        });

        chatRef.current.value = "";
    }
    return (
        <div className="position-absolute bottom-0 w-100 chat-area-container">
            <textarea
                className="w-100 border-0 border-top ps-2 py-2 pe-5 small chat-area lh-sm"
                placeholder="Type your message here..."
                name=""
                id=""
                ref={chatRef}
            ></textarea>
            <div onClick={handleSend} className="position-absolute top-50 start-95 translate-middle me-2" role="button">
                <SendIcon className="send-icon text-primary" height="20" width="20" />
            </div>
        </div>
    );
}

export default ChatArea;
