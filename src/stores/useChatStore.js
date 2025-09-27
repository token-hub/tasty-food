import { create } from "zustand";

export const useChatStore = create((set) => ({
    openChat: false,
    selectedConvo: undefined,
    updateSelectedConvo: (data) => set(({ selectedConvo }) => ({ ...selectedConvo, ...data })),
    setSelectedConvo: (convo) => set(() => ({ selectedConvo: convo })),
    handleOpenChat: () => set(() => ({ openChat: true })),
    handleCloseChat: () => set(() => ({ openChat: false }))
}));
