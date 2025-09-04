import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getSession } from "../queries/getSession";

const UserContext = createContext();

export function useUserContext() {
    return useContext(UserContext);
}

function UserProvider({ children }) {
    const { data: session } = useQuery({
        queryKey: ["session"],
        queryFn: ({ signal }) => getSession(signal),
        staleTime: 1 * 60 * 1000 * 60
    });

    const values = useMemo(
        () => ({
            user: session?.details?.user
        }),
        [session]
    );

    return <UserContext value={values}>{children}</UserContext>;
}

export default UserProvider;
