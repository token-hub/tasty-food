import { Outlet } from "react-router";
import CreateRecipeModal from "../components/modals/createNewRecipe/createRecipeModal";
import DefaultMetaData from "../components/header/defaultMetaData";
import MobileSlides from "../components/slides/mobileSlides";
import Toasts from "../components/toast/toasts";
import { getSession } from "../queries/getSession";
import { useQuery } from "@tanstack/react-query";
import { useUserStore } from "../stores/useUserStore";
import { useEffect } from "react";
import { useSocket } from "../hooks/useSocket";

function Base() {
    const setUser = useUserStore((state) => state.setUser);
    const setIsLoading = useUserStore((state) => state.setIsLoading);

    const { data: session, isLoading } = useQuery({
        queryKey: ["session"],
        queryFn: ({ signal }) => getSession(signal),
        staleTime: 1000 * 60 * 60 // 1 hour,
    });

    useEffect(() => {
        if (session) {
            setUser(session?.details?.user);
            setIsLoading(isLoading);
        }
    }, [session, isLoading, setIsLoading, setUser]);
    useSocket();
    return (
        <>
            <DefaultMetaData />
            <MobileSlides />
            <Toasts />
            <Outlet />
            <CreateRecipeModal />
        </>
    );
}

export default Base;
