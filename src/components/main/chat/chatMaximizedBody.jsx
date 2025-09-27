import { useRef, useEffect } from "react";
import ConvoMessage from "./convoMessage";
import ChatArea from "./chatArea";
import { useChatStore } from "../../../stores/useChatStore";
import { useUserContext } from "../../../providers/userProvider";

function ChatMaximizedBody({ mobileView = false }) {
    const selectedConvo = useChatStore((state) => state.selectedConvo);
    const { user } = useUserContext();
    const convoWith = selectedConvo?.participants.find((u) => u.userId != user.id)?.name;
    const bottomRef = useRef();

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [selectedConvo]);

    return (
        <div className={`mt-2 ${mobileView ? "h-90" : "h-100"} position-relative`}>
            {!mobileView && (
                <>
                    <p className="fs-7 m-0 mb-1 fw-bold px-3">{convoWith}</p>
                    <hr className="m-0" />
                </>
            )}

            <div className="h-100 p-3 overflow-auto">
                <div className="d-flex flex-column mb-6">
                    {selectedConvo &&
                        selectedConvo.messages.length > 0 &&
                        selectedConvo.messages.map(({ messageId, message, userId, updatedAt }) => {
                            const isUser = userId == user?.id;

                            return (
                                <>
                                    <ConvoMessage key={messageId} date={new Date(updatedAt)} isUser={isUser} message={message} />
                                </>
                            );
                        })}
                    <div ref={bottomRef} />
                </div>
            </div>
            <ChatArea />
        </div>
    );
}

export default ChatMaximizedBody;
