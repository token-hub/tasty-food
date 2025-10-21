import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const store = (set) => ({
    openChat: false,
    openChatSmall: false,
    selectedConvo: undefined,
    conversations: [],
    setConversations: (updateFnc) =>
        set((state) => ({
            conversations: updateFnc(state.conversations)
        })),

    updateSelectedConvo: (updateFnc) =>
        set((state) => ({
            selectedConvo: updateFnc(state.selectedConvo)
        })),
    setSelectedConvo: (convo) => set(() => ({ selectedConvo: convo })),
    handleOpenChat: (isSmallScreen = false) => set(() => ({ [isSmallScreen ? 'openChatSmall' : 'openChat']: true })),
    handleCloseChat: (isSmallScreen = false) =>
        set(() => ({ [isSmallScreen ? 'openChatSmall' : 'openChat']: false, selectedConvo: undefined }))
});

export const useChatStore = create(devtools(store));
