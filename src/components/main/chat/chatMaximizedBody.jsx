import { useEffect, useRef, useState } from "react";
import ConvoMessage from "./convoMessage";
import ChatArea from "./chatArea";
import { useUserStore } from "../../../stores/useUserStore";
import { objectToFormData } from "../../../lib/utilities";
import { useMessagesFetcher } from "../../../hooks/useMessagesFetcher";

function ChatMaximizedBody({ mobileView = false }) {
    const chatRef = useRef();
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const { fetcher, pagination, selectedConvo } = useMessagesFetcher(chatRef);

    const user = useUserStore((state) => state.user);
    const convoWith = selectedConvo?.participants.find((u) => u.userId != user.id)?.name;
    const bottomRef = useRef();
    const [scrollAtTheBottom, setScrollAtTheBottom] = useState(true);

    useEffect(() => {
        if (scrollAtTheBottom || selectedConvo?.messages.length <= 6) {
            bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [selectedConvo, scrollAtTheBottom]);

    function handleScroll(e) {
        const currentScrollTop = e.target.scrollTop;
        const scrollingUp = currentScrollTop < lastScrollTop;
        const reachedTheTop = currentScrollTop === 0;

        const isBottom = Math.abs(e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight) < 5;
        setScrollAtTheBottom(isBottom);

        if (scrollingUp && reachedTheTop && selectedConvo) {
            fetcher.submit(
                objectToFormData({
                    conversationId: selectedConvo._id,
                    recipeId: selectedConvo.recipes.find((r) => r.isLatest)?.recipeId,
                    skipFirstConvoMessages: true,
                    pagination
                }),
                { action: "/chat/getMoreMessages", method: "POST" }
            );
        }
        setLastScrollTop(currentScrollTop);
    }

    return (
        <div className={`mt-2 ${mobileView ? "h-90" : "h-100"} position-relative`}>
            {!mobileView && (
                <>
                    <p className="fs-7 m-0 mb-1 fw-bold px-3">{convoWith}</p>
                    <hr className="m-0" />
                </>
            )}
            <div className="h-100 p-3 overflow-auto" onScroll={handleScroll} ref={chatRef}>
                <div className="d-flex flex-column mb-6">
                    {fetcher.state !== "idle" && (
                        <p className="text-center">
                            <span className="spinner-grow spinner-grow-sm me-2" aria-hidden="true" />
                            <span className="text-muted fs-7">Loading ...</span>
                        </p>
                    )}
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
            <ChatArea bottomRef={bottomRef} />
        </div>
    );
}

export default ChatMaximizedBody;
