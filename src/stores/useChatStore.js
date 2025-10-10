import { create } from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
    openChat: false,
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
    handleOpenChat: () => set(() => ({ openChat: true })),
    handleCloseChat: () => set(() => ({ openChat: false, selectedConvo: false }))
});

export const useChatStore = create(devtools(store));
