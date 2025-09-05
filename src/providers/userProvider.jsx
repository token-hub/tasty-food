import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useMemo } from "react";
import { getSession } from "../queries/getSession";
import { useNavigate } from "react-router";

const UserContext = createContext();

export function useUserContext() {
    return useContext(UserContext);
}

function UserProvider({ children }) {
    const navigate = useNavigate();
    const { data: session, isLoading } = useQuery({
        queryKey: ["session"],
        queryFn: ({ signal }) => getSession(signal),
        staleTime: 1 * 60 * 1000 * 60
    });

    useEffect(() => {
        if (!isLoading && !session?.details?.user) {
            navigate("/auth");
        }
    }, [isLoading, session, navigate]);

    const values = useMemo(
        () => ({
            user: session?.details?.user
        }),
        [session]
    );

    return <UserContext value={values}>{children}</UserContext>;
}

export default UserProvider;
