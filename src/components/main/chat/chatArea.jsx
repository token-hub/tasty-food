import { useEffect, useRef } from "react";
import SendIcon from "../../../assets/icons/sendIcon";
import { useFetcher } from "react-router";
import { objectToFormData } from "../../../lib/utilities";
import { useUserStore } from "../../../stores/useUserStore";
import { useChatStore } from "../../../stores/useChatStore";

function ChatArea({ bottomRef }) {
    const chatRef = useRef();
    const fetcher = useFetcher();
    const user = useUserStore((state) => state.user);
    const selectedConvo = useChatStore((state) => state.selectedConvo);
    const updateSelectedConvo = useChatStore((state) => state.updateSelectedConvo);
    useEffect(() => {
        if (fetcher.data?.error) {
            const hasOptimisticData = selectedConvo.messages.some((m) => !m.messageId);
            if (hasOptimisticData) {
                updateSelectedConvo({
                    messages: selectedConvo.messages.filter((m) => m.messageId)
                });
            }
        }

        if (fetcher?.data?.result && fetcher.state === "loading") {
            bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [fetcher, bottomRef, selectedConvo, updateSelectedConvo]);

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
        updateSelectedConvo({ messages });

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
