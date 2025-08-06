import { useState } from "react";
import ChatMinimized from "./chatMinimized";
import ChatMaximized from "./chatMaximized";

function Chat() {
    const [openMaxChat, setOpenMaxChat] = useState(false);
    let chatCount = 99;

    function handleOpenMaxChat() {
        setOpenMaxChat(true);
    }
    function handleCloseMaxChat() {
        setOpenMaxChat(false);
    }

    return (
        <>
            {/* minimized */}
            <ChatMinimized isMaxChatOpen={openMaxChat} chatCount={chatCount} onClick={handleOpenMaxChat} />

            {/* maximized */}
            <ChatMaximized isOpen={openMaxChat} onClick={handleCloseMaxChat} chatCount={chatCount} />
        </>
    );
}

export default Chat;
