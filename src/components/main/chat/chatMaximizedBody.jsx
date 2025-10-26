import { useEffect, useRef, useState } from 'react';
import ConvoMessage from './convoMessage';
import ChatArea from './chatArea';
import ChatConvoWithTopic from './chatConvoWithTopic';
import { useUserStore } from '../../../stores/useUserStore';
import { objectToFormData } from '../../../lib/utilities';
import { useMessagesFetcher } from '../../../hooks/useMessagesFetcher';

function ChatMaximizedBody({ mobileView = false }) {
    const chatRef = useRef();
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const { fetcher, pagination, selectedConvo } = useMessagesFetcher();

    const user = useUserStore((state) => state.user);

    const bottomRef = useRef();
    const [scrollAtTheBottom, setScrollAtTheBottom] = useState(false);
    const convoMessagesLength = +selectedConvo?.messages?.length;
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        const scrollAtBotAndSendingMessage = scrollAtTheBottom && !initialLoad;

        if (scrollAtTheBottom || initialLoad || scrollAtBotAndSendingMessage) {
            bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [convoMessagesLength, scrollAtTheBottom, initialLoad]);

    function handleScroll(e) {
        const currentScrollTop = e.target.scrollTop;
        const scrollingUp = currentScrollTop < lastScrollTop;
        const reachedTheTop = currentScrollTop === 0;

        if (scrollingUp) {
            setScrollAtTheBottom(false);
            setInitialLoad(false);
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
                { action: '/chat/getMoreMessages', method: 'POST' }
            );
        }
        setLastScrollTop(currentScrollTop);
    }

    return (
        <div style={{ height: mobileView ? 'calc(100% - 4rem)' : '100%' }} className={`position-relative`}>
            <ChatConvoWithTopic />
            <div
                style={{ height: 'calc(100% - 5rem)' }}
                className={`p-3 overflow-auto`}
                onScroll={handleScroll}
                ref={chatRef}
            >
                <div className={`d-flex flex-column ${mobileView ? 'mb-3' : 'mb-2'} position-relative`}>
                    {fetcher.state !== 'idle' && (
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
                                    <ConvoMessage
                                        messageId={messageId ?? _id}
                                        date={new Date(updatedAt)}
                                        isUser={isUser}
                                        message={message}
                                    />
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
