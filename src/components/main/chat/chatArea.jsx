import { useEffect, useRef } from "react";
import SendIcon from "../../../assets/icons/sendIcon";
import { useFetcher } from "react-router";
import { objectToFormData } from "../../../lib/utilities";
import { useUserContext } from "../../../providers/userProvider";
import { useChatContext } from "../../../providers/chatProvider";

function ChatArea() {
    const chatRef = useRef();
    const fetcher = useFetcher();
    const { user } = useUserContext();
    const { selectedConvo, setSelectedConvo } = useChatContext();

    useEffect(() => {
        if (fetcher.data?.error) {
            const hasOptimisticData = selectedConvo.messages.some((m) => !m.messageId);
            if (hasOptimisticData) {
                setSelectedConvo((prev) => {
                    return {
                        ...prev,
                        messages: prev.messages.filter((m) => m.messageId)
                    };
                });
            }
        }
    }, [fetcher, selectedConvo, setSelectedConvo]);

    function handleSend() {
        const newMessage = {
            message: chatRef.current.value,
            userId: user?.id,
            recipeId: selectedConvo.recipes.find((r) => r.isLatest).recipeId,
            conversationId: selectedConvo._id,
            isReadBy: [user.id]
        };
        setSelectedConvo((prev) => {
            const messages = [...prev.messages];
            newMessage.updatedAt = new Date();
            messages.push(newMessage);
            return {
                ...prev,
                messages
            };
        });

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
