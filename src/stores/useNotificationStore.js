import { create } from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
    notifications: [],
    setNotifications: (updateFnc) =>
        set((state) => ({
            notifications: updateFnc(state.notifications)
        }))
});

export const useNotificationStore = create(devtools(store));
