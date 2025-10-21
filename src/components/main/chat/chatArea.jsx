import { useRef } from 'react';
import SendIcon from '../../../assets/icons/sendIcon';
import { objectToFormData } from '../../../lib/utilities';
import { useSendMessageFetcher } from '../../../hooks/useSendMessageFetcher';

function ChatArea({ bottomRef }) {
    const chatRef = useRef();
    const { user, selectedConvo, updateSelectedConvo, fetcher } = useSendMessageFetcher(bottomRef);

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
            action: '/:authorId/recipes/:recipeId/createMessage',
            method: 'POST'
        });

        chatRef.current.value = '';
    }
    return (
        <div className="position-absolute bottom-0 w-100 chat-area-container bg-white">
            <textarea
                className="w-100 border-0 border-top ps-2 py-2 pe-5 small chat-area lh-sm"
                placeholder="Type your message here..."
                name="chat"
                ref={chatRef}
            ></textarea>
            <div onClick={handleSend} className="position-absolute top-50 start-95 translate-middle me-3" role="button">
                <SendIcon className="send-icon text-primary" height="20" width="20" />
            </div>
        </div>
    );
}

export default ChatArea;
