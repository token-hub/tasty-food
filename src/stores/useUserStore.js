import { create } from "zustand";

export const useUserStore = create((set) => ({
    user: undefined,
    isLoading: false,
    setUser: (user) => set(() => ({ user })),
    setIsLoading: (isLoading) =>
        set(() => ({
            isLoading
        }))
}));
