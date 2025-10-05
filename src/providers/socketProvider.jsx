import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext({
    socket: {}
});

export function useSocketContext() {
    return useContext(SocketContext);
}

export function SocketProvider({ children }) {
    const [socket, setSocket] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const newSocket = io("http://localhost:3001");
        setSocket(newSocket);

        newSocket.on("users", (data) => {
            setUsers(data);
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
