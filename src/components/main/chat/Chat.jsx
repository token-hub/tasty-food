import ChatMinimized from "./chatMinimized";
import ChatMaximized from "./chatMaximized";
import { useChatStore } from "../../../stores/useChatStore";

function Chat() {
    const openChat = useChatStore((state) => state.openChat);
    const handleOpenChat = useChatStore((state) => state.handleOpenChat);
    const handleCloseChat = useChatStore((state) => state.handleCloseChat);
    let chatCount = 99;

    return (
        <>
            {/* minimized */}
            <ChatMinimized isMaxChatOpen={openChat} chatCount={chatCount} onClick={handleOpenChat} />

            {/* maximized */}
            <ChatMaximized isOpen={openChat} onClick={handleCloseChat} chatCount={chatCount} />
        </>
    );
}

export default Chat;
