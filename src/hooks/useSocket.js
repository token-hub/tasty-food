import { useEffect } from "react";
import { io } from "socket.io-client";
import { queryClient } from "../lib/queryClient";
import { useChatStore } from "../stores/useChatStore";
import { useSocketStore } from "../stores/useSocketStore";
import { useUserStore } from "../stores/useUserStore";

export function useSocket() {
    const user = useUserStore((state) => state.user);
    const setSocket = useSocketStore((state) => state.setSocket);
    const setUsers = useSocketStore((state) => state.setUsers);
    const updateSelectedConvo = useChatStore((state) => state.updateSelectedConvo);

    useEffect(() => {
        if (user) {
            const newSocket = io("http://localhost:3001", {
                auth: { userId: user.id }
            });
            setSocket(newSocket);

            newSocket.on("users", (data) => {
                setUsers(data);
            });

            newSocket.on("private-message", (data) => {
                if (data.to === user.id) {
                    queryClient.invalidateQueries({ queryKey: ["chat", "conversations"] });
                    updateSelectedConvo((prev) => ({
                        ...prev,
                        messages: [...prev.messages, data.message]
                    }));
                }
            });

            return () => {
                newSocket.close();
            };
        }
    }, [user, setSocket, setUsers, updateSelectedConvo]);
}
