import { create } from "zustand";

export const useChatStore = create((set) => ({
    openChat: false,
    selectedConvo: undefined,
    updateSelectedConvo: (updateFnc) =>
        set((state) => ({
            selectedConvo: updateFnc(state.selectedConvo)
        })),
    setSelectedConvo: (convo) => set(() => ({ selectedConvo: convo })),
    handleOpenChat: () => set(() => ({ openChat: true })),
    handleCloseChat: () => set(() => ({ openChat: false, selectedConvo: false }))
}));
