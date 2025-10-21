import { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export function useChatContext() {
    return useContext(ChatContext);
}

function ChatProvider({ children }) {
    const [openChat, setOpenChat] = useState(false);
    const [selectedConvo, setSelectedConvo] = useState();

    function handleOpenChat() {
        setOpenChat(true);
    }
    function handleCloseChat() {
        setOpenChat(false);
    }

    const values = {
        openChat,
        handleOpenChat,
        handleCloseChat,
        selectedConvo,
        setSelectedConvo
    };
    return <ChatContext value={values}>{children}</ChatContext>;
}

export default ChatProvider;
