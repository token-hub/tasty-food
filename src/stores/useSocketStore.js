import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const store = (set) => ({
    users: [],
    socket: null,
    setSocket: (socket) => set(() => ({ socket })),
    setUsers: (users) => set(() => ({ users }))
});

export const useSocketStore = create(devtools(store));
