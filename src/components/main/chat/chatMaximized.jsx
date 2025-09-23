import ChatConvo from "./chatConvo";
import ChatMaximizedHeader from "./chatMaximizedHeader";
import ChatMaximizedBody from "./chatMaximizedBody";
import { useQuery } from "@tanstack/react-query";
import { getConversations } from "../../../queries/getConversations";
import { useUserContext } from "../../../providers/userProvider";
import { usePagination } from "../../../hooks/usePagination";

function ChatMaximized({ chatCount, isOpen, onClick }) {
    let hasSelectedConvo = true;
    const { user } = useUserContext();
    const { pagination } = usePagination();

    const { data: { details = [] } = {}, isLoading } = useQuery({
        queryKey: ["chat", "conversations"],
        queryFn: ({ signal }) => getConversations({ signal, userId: user?.id, pagination }),
        enabled: Boolean(isOpen && user?.id)
    });

    return (
        <div className={`chat-maximized position-fixed bottom-0 end-0 bg-light rounded-top shadow ${isOpen ? "chat-maximized-open" : ""} `}>
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
                            details.map(({ _id, participants, updatedAt, messages }) => {
                                const convoWith = participants.find((u) => u.userId != user.id);
                                const text = messages[0] ?? "...";
                                const convoCount = messages.filter((m) => !m.isRead).length;
                                return <ChatConvo name={convoWith.name} date={updatedAt} key={_id} text={text} convoCount={convoCount} />;
                            })}
                    </div>
                    <div className="col-8 h-100 ps-0 ">
                        {!hasSelectedConvo && (
                            <div className="h-100 d-flex flex-column align-items-center justify-content-center bg-gray-light">
                                <h6 className="fw-bold">Welcome to Recipe Chat</h6>
                                <h6 className="text-muted">Start a conversations</h6>
                            </div>
                        )}
                        <ChatMaximizedBody convoWith={"John Doe"} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatMaximized;
