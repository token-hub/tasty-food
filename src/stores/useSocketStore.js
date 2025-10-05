import { create } from "zustand";

export const useSocketStore = create((set) => ({
    users: [],
    socket: null,
    setSocket: (socket) => set(() => ({ socket })),
    setUsers: (users) => set(() => ({ users }))
}));
