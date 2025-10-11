import ChatMinimized from "./chatMinimized";
import ChatMaximized from "./chatMaximized";
import { useChatStore } from "../../../stores/useChatStore";
import { useUserStore } from "../../../stores/useUserStore";

function Chat() {
    const handleOpenChat = useChatStore((state) => state.handleOpenChat);
    const handleCloseChat = useChatStore((state) => state.handleCloseChat);
    const conversations = useChatStore((state) => state.conversations);
    const user = useUserStore((state) => state.user);
    let chatCount = conversations.reduce((prev, current) => {
        const total = prev + +current?.messages.filter((m) => !m.isReadBy?.includes(user.id)).length;
        return total;
    }, 0);

    return (
        <>
            {/* minimized */}
            <ChatMinimized chatCount={chatCount} onClick={() => handleOpenChat()} />

            {/* maximized */}
            <ChatMaximized onClick={() => handleCloseChat()} chatCount={chatCount} />
        </>
    );
}

export default Chat;
