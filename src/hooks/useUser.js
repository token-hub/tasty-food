import { useQuery } from "@tanstack/react-query";
import { useUserStore } from "../stores/useUserStore";
import { getSession } from "../queries/getSession";
import { useEffect } from "react";

export function useUser() {
    const setUser = useUserStore((state) => state.setUser);
    const setIsLoading = useUserStore((state) => state.setIsLoading);

    const { data: session, isLoading } = useQuery({
        queryKey: ["session"],
        queryFn: ({ signal }) => getSession(signal),
        staleTime: 1000 * 60 * 60 // 1 hour,
    });

    useEffect(() => {
        setIsLoading(isLoading);
        if (session) {
            setUser(session.details?.user);
            setIsLoading(isLoading);
        }
    }, [session, isLoading, setUser, setIsLoading]);
}
