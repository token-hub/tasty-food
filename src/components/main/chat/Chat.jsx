import ChatDotsIcon from "../../../assets/icons/ChatDotsIcon";

function Chat() {
    return (
        <div className="position-fixed bottom-0 end-0 me-3 bg-primary py-2 px-3 rounded-top text-white" role="button">
            <ChatDotsIcon />
            <span className="ms-2">Chat</span>
        </div>
    );
}

export default Chat;
