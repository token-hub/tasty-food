import { createContext, useContext, useMemo, useState } from "react";

const UserContext = createContext();

export function useUserContext() {
    return useContext(UserContext);
}

function UserProvider({ children }) {
    const [user, setUser] = useState({});

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
