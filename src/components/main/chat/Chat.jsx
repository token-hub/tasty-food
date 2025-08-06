import ChatMinimized from "./chatMinimized";
import ChatMaximized from "./chatMaximized";

function Chat() {
    let chatCount = 99;
    return (
        <>
            {/* minimized */}
            <ChatMinimized chatCount={chatCount} />

            {/* maximized */}
            <ChatMaximized chatCount={chatCount} />
        </>
    );
}

export default Chat;
