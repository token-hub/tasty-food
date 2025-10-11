import { useEffect, useEffectEvent, useState } from "react";
import ChatDotsIcon from "../../../assets/icons/chatDotsIcon";
import { objectToFormData } from "../../../lib/utilities";
import { useGetConversations } from "../../../hooks/useGetConversations";
import { useMarkUnreadMessagesFetcher } from "../../../hooks/useMarkUnreadMessagesFetcher";
import { useChatStore } from "../../../stores/useChatStore";
import { useSlideStore } from "../../../stores/useSlideStore";
import { useUserStore } from "../../../stores/useUserStore";
import { SUBMENU_HEADERS } from "../../../lib/constants";
import ChatConvo from "./chatConvo";

function ChatMinimized({ chatCount, onClick }) {
    const openSlide = useSlideStore((state) => state.openSlide);
    const setSelectedConvo = useChatStore((state) => state.setSelectedConvo);
    const openChatSmall = useChatStore((state) => state.openChatSmall);
    const conversations = useChatStore((state) => state.conversations);
    const user = useUserStore((state) => state.user);
    const { fetcher } = useMarkUnreadMessagesFetcher();

    const [scrollAtTheBottom, setScrollAtTheBottom] = useState(false);
    const { isLoading } = useGetConversations(user, scrollAtTheBottom, true);

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

    const getComponents = useEffectEvent(() => {
        return conversations.map((convo, index) => {
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
                    isFirst={index === 0}
                    onClick={() => handleConvoClick(deepCopy, unreadCount)}
                    name={convoWith.name}
                    date={updatedAt}
                    key={_id}
                    text={text}
                    unreadCount={unreadCount}
                    mobileView
                />
            );
        });
    });

    useEffect(() => {
        if (openChatSmall && conversations) {
            const component = getComponents();

            if (component.length) {
                openSlide({
                    open: true,
                    header: SUBMENU_HEADERS[2],
                    component
                });
            }
        }
    }, [openChatSmall, conversations, openSlide]);

    return (
        <div
            className={`chat-minimized d-none d-sm-block position-fixed bottom-0 end-0 me-3 bg-primary py-2 px-3 rounded-top text-white position-relative ${
                openChatSmall ? "chat-minimized-open" : ""
            } `}
            onClick={onClick}
            role="button"
        >
            <ChatDotsIcon />
            <span className="ms-2">Chat</span>
            {chatCount > 0 && (
                <span
                    className="fs-7 border border-light position-absolute top-0 bg-secondary  rounded-circle p-1 mt-n3 ms-n2 text-center"
                    style={{ width: "30px" }}
                >
                    {chatCount}
                </span>
            )}
        </div>
    );
}

export default ChatMinimized;
