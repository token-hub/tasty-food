import { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useChatStore } from '../stores/useChatStore';
import { queryClient } from '../lib/queryClient';

const SocketContext = createContext({
    socket: {}
});

export function useSocketContext() {
    return useContext(SocketContext);
}

export function SocketProvider({ children }) {
    const [socket, setSocket] = useState(null);
    const [users, setUsers] = useState([]);
    const updateSelectedConvo = useChatStore((state) => state.updateSelectedConvo);

    useEffect(() => {
        const newSocket = io(import.meta.env.VITE_SERVER_URL);
        setSocket(newSocket);

        newSocket.on('users', (data) => {
            setUsers(data);
        });

        newSocket.on('private-message', (message) => {
            queryClient.invalidateQueries({ queryKey: ['chat', 'conversations'] });
            updateSelectedConvo((prev) => ({
                ...prev,
                messages: [...prev.messages, message]
            }));
        });

        return () => {
            newSocket.close();
        };
    }, []);

    const values = {
        socket,
        users
    };
    return <SocketContext value={values}>{children}</SocketContext>;
}
