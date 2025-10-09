import { useEffect, useRef, useState } from "react";
import ConvoMessage from "./convoMessage";
import ChatArea from "./chatArea";
import { useUserStore } from "../../../stores/useUserStore";
import { objectToFormData, trimTextAddEllipsis } from "../../../lib/utilities";
import { useMessagesFetcher } from "../../../hooks/useMessagesFetcher";

function ChatMaximizedBody({ mobileView = false }) {
    const chatRef = useRef();
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const { fetcher, pagination, selectedConvo } = useMessagesFetcher();

    const user = useUserStore((state) => state.user);
    const convoWith = selectedConvo?.participants?.find((u) => u.userId != user.id)?.name;
    const bottomRef = useRef();
    const [scrollAtTheBottom, setScrollAtTheBottom] = useState(true);
    const convoMessagesLength = +selectedConvo?.messages?.length;
    const topicLength = +selectedConvo?.recipes?.length;

    useEffect(() => {
        const isInitialLoad = convoMessagesLength <= 6;
        const scrollAtBotAndSendingMessage = scrollAtTheBottom && !isInitialLoad;

        if (scrollAtTheBottom || isInitialLoad || scrollAtBotAndSendingMessage) {
            bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [convoMessagesLength, scrollAtTheBottom]);

    function handleScroll(e) {
        const currentScrollTop = e.target.scrollTop;
        const scrollingUp = currentScrollTop < lastScrollTop;
        const reachedTheTop = currentScrollTop === 0;

        if (scrollingUp) {
            setScrollAtTheBottom(false);
        } else {
            const isBottom = Math.abs(e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight) < 5;
            setScrollAtTheBottom(isBottom);
        }

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
                    <div className="d-flex align-items-center">
                        <span className="fs-7 m-0 fw-bold ps-3">{convoWith}</span>
                        <span className="mx-2 fs-7">*</span>
                        {topicLength == 1 && <span className="fs-7">{trimTextAddEllipsis(selectedConvo.recipes[0].name, 20)}</span>}
                        {topicLength > 1 && (
                            <select
                                class="form-select p-2 mb-2"
                                aria-label="Recipe Topics"
                                value={selectedConvo.recipes.find((r) => r.isLatest).recipeId}
                            >
                                {selectedConvo.recipes.map((recipe) => {
                                    return <option value={recipe.recipeId}>{trimTextAddEllipsis(recipe.name, 20)}</option>;
                                })}
                            </select>
                        )}
                    </div>
                    <hr className="m-0" />
                </>
            )}
            <div className="h-100 p-3 overflow-auto" onScroll={handleScroll} ref={chatRef}>
                <div className="d-flex flex-column mb-6 position-relative">
                    {fetcher.state !== "idle" && (
                        <p className="position-absolute top-0 start-50 translate-middle mt-2">
                            <span className="spinner-grow spinner-grow-sm me-2" aria-hidden="true" />
                        </p>
                    )}
                    {selectedConvo &&
                        selectedConvo.messages.length > 0 &&
                        selectedConvo.messages.map(({ _id, messageId, message, userId, updatedAt }) => {
                            const isUser = userId == user?.id;

                            return (
                                <>
                                    <ConvoMessage messageId={messageId ?? _id} date={new Date(updatedAt)} isUser={isUser} message={message} />
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
