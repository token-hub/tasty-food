import SendIcon from "../../../assets/icons/sendIcon";

function ChatArea() {
    return (
        <div className="position-absolute bottom-0 w-100 chat-area-container">
            <textarea
                className="w-100 border-0 border-top ps-2 py-2 pe-5 small chat-area lh-sm"
                placeholder="Type your message here..."
                name=""
                id=""
            ></textarea>
            <div className="position-absolute top-50 start-95 translate-middle me-2" role="button">
                <SendIcon className="send-icon text-primary" height="20" width="20" />
            </div>
        </div>
    );
}

export default ChatArea;
