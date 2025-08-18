import ChatMinimized from "./chatMinimized";
import ChatMaximized from "./chatMaximized";
import { useChatContext } from "../../../providers/chatProvider";

function Chat() {
    const { openChat, handleMaxChat, handleCloseChat } = useChatContext();
    let chatCount = 99;

    return (
        <>
            {/* minimized */}
            <ChatMinimized isMaxChatOpen={openChat} chatCount={chatCount} onClick={handleMaxChat} />

            {/* maximized */}
            <ChatMaximized isOpen={openChat} onClick={handleCloseChat} chatCount={chatCount} />
        </>
    );
}

export default Chat;
