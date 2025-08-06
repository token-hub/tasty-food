import ChatDotsIcon from "../../../assets/icons/ChatDotsIcon";
function ChatMinimized({ chatCount }) {
    return (
        <div className="position-fixed bottom-0 end-0 me-3 bg-primary py-2 px-3 rounded-top text-white position-relative" role="button">
            <ChatDotsIcon />
            <span className="ms-2">Chat</span>
            {chatCount > 0 && (
                <span
                    className="fs-7 border border-light position-absolute top-0 bg-secondary  rounded-circle p-1 mt-n3 ms-n2 text-center"
                    style={{ width: "30px" }}
                >
                    chatCount
                </span>
            )}
        </div>
    );
}

export default ChatMinimized;
