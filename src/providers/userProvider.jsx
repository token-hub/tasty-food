import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useMemo, useState } from "react";
import { getSession } from "../queries/getSession";

const UserContext = createContext();

export function useUserContext() {
    return useContext(UserContext);
}

function UserProvider({ children }) {
    const query = useQuery({ queryKey: ["session"], queryFn: ({ signal }) => getSession(signal), staleTime: 1 * 60 * 1000 * 60, retry: false });
    const [user, setUser] = useState(query?.data?.details?.user);

    const values = useMemo(
        () => ({
            user,
            setUser
        }),
        [user]
    );

    return <UserContext value={values}>{children}</UserContext>;
}

export default UserProvider;
