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

    useEffect(() => {
        const newSocket = io("http://localhost:3001");
        setSocket(newSocket);

        return () => {
            newSocket.close();
        };
    }, []);

    const values = {
        socket
    };
    return <SocketContext value={values}>{children}</SocketContext>;
}
