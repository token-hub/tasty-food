import { useQuery } from '@tanstack/react-query';
import { createContext, useContext, useMemo } from 'react';
import { getSession } from '../queries/getSession';

const UserContext = createContext();

export function useUserContext() {
    return useContext(UserContext);
}

function UserProvider({ children }) {
    const { data: session, isLoading } = useQuery({
        queryKey: ['session'],
        queryFn: ({ signal }) => getSession(signal),
        staleTime: 1000 * 60 * 60 // 1 hour,
    });

    const values = useMemo(
        () => ({
            user: session?.details?.user,
            isLoading
        }),
        [session, isLoading]
    );

    return <UserContext value={values}>{children}</UserContext>;
}

export default UserProvider;
