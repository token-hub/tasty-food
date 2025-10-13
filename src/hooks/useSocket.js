import { useEffect, useEffectEvent } from "react";
import { io } from "socket.io-client";
import { queryClient } from "../lib/queryClient";
import { useChatStore } from "../stores/useChatStore";
import { useSocketStore } from "../stores/useSocketStore";
import { useUserStore } from "../stores/useUserStore";
import { useNotificationStore } from "../stores/useNotificationStore";

export function useSocket() {
    const user = useUserStore((state) => state.user);
    const setSocket = useSocketStore((state) => state.setSocket);
    const setUsers = useSocketStore((state) => state.setUsers);
    const updateSelectedConvo = useChatStore((state) => state.updateSelectedConvo);
    const setNotifications = useNotificationStore((state) => state.setNotifications);

    const intializeListeners = useEffectEvent((socket) => {
        setSocket(socket);

        socket.on("users", (data) => {
            setUsers(data);
        });

        socket.on("private-message", (data) => {
            if (data.to === user.id) {
                queryClient.invalidateQueries({ queryKey: ["chat", "conversations"] });
                updateSelectedConvo((prev) => {
                    if (prev) {
                        return {
                            ...prev,
                            messages: [...prev.messages, data.message]
                        };
                    }
                });
            }
        });

        socket.on("notification", (data) => {
            if (data.to === user.id) {
                setNotifications((prevNotifications) => [...prevNotifications, data.notification]);
            }
        });
    });

    useEffect(() => {
        if (user) {
            const newSocket = io("http://localhost:3001", {
                auth: { userId: user.id }
            });

            intializeListeners(newSocket);

            return () => {
                newSocket.close();
            };
        }
    }, [user]);
}
