import { create } from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
    user: undefined,
    isLoading: false,
    setUser: (user) => set(() => ({ user })),
    setIsLoading: (isLoading) =>
        set(() => ({
            isLoading
        }))
});

export const useUserStore = create(devtools(store));
