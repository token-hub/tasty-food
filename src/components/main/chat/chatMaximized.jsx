import ChatConvo from "./chatConvo";
import ChatMaximizedHeader from "./chatMaximizedHeader";
import ChatMaximizedBody from "./chatMaximizedBody";
import { useQuery } from "@tanstack/react-query";
import { getConversations } from "../../../queries/getConversations";
import { useUserStore } from "../../../stores/useUserStore";
import { usePagination } from "../../../hooks/usePagination";
import { useChatStore } from "../../../stores/useChatStore";
import { objectToFormData } from "../../../lib/utilities";
import { useMarkUnreadMessagesFetcher } from "../../../hooks/useMarkUnreadMessagesFetcher";

function ChatMaximized({ chatCount, isOpen, onClick }) {
    const selectedConvo = useChatStore((state) => state.selectedConvo);
    const setSelectedConvo = useChatStore((state) => state.setSelectedConvo);
    const user = useUserStore((state) => state.user);
    const { fetcher } = useMarkUnreadMessagesFetcher();
    const { pagination } = usePagination();

    const { data: { details = [] } = {}, isLoading } = useQuery({
        queryKey: ["chat", "conversations"],
        queryFn: ({ signal }) => getConversations({ signal, userId: user?.id, pagination }),
        enabled: Boolean(isOpen && user?.id)
    });

    function handleConvoClick(convo, unreadCount) {
        setSelectedConvo(convo);

        if (unreadCount > 0) {
            fetcher.submit(
                objectToFormData({
                    conversationId: convo._id,
                    userId: user.id
                }),
                { action: "/chat/markUnreadMessages", method: "PUT" }
            );
        }
    }

    return (
        <div className={`chat-maximized z-3 position-fixed bottom-0 end-0 bg-light rounded-top shadow ${isOpen ? "chat-maximized-open" : ""} `}>
            <ChatMaximizedHeader onClick={onClick} chatCount={chatCount} />
            <div className="chat-body">
                <div className="row h-100">
                    <div className="col-4 h-100 border-end pe-0 overflow-auto">
                        {isLoading && (
                            <p className="text-center">
                                <span className="spinner-grow spinner-grow-sm me-2" aria-hidden="true" />
                                <span className="text-muted fs-7">Loading ...</span>
                            </p>
                        )}

                        {!isLoading &&
                            details.length > 0 &&
                            details.map((convo) => {
                                const { _id, participants, updatedAt, messages } = convo;
                                const convoWith = participants.find((u) => u.userId != user.id);
                                const latestMessage = messages[messages.length - 1];
                                const text = latestMessage ? latestMessage.message : "...";
                                const unreadCount = messages.filter((m) => !m.isReadBy?.includes(user.id)).length;
                                // so that text in the convo sidebar won't change if
                                // error happened during optimistic update
                                const deepCopy = JSON.parse(JSON.stringify(convo));
                                return (
                                    <ChatConvo
                                        onClick={() => handleConvoClick(deepCopy, unreadCount)}
                                        name={convoWith.name}
                                        date={updatedAt}
                                        key={_id}
                                        text={text}
                                        unreadCount={unreadCount}
                                    />
                                );
                            })}
                    </div>
                    <div className="col-8 h-100 ps-0 ">
                        {!selectedConvo && (
                            <div className="h-100 d-flex flex-column align-items-center justify-content-center bg-gray-light">
                                <h6 className="fw-bold">Welcome to Recipe Chat</h6>
                                <h6 className="text-muted">Start a conversations</h6>
                            </div>
                        )}
                        <ChatMaximizedBody />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatMaximized;
