import { Outlet } from "react-router";
import SlideProvider from "../providers/slideProvider";
import RecipeProvider from "../providers/recipeProvider";
import ChatProvider from "../providers/chatProvider";
import ModalProvider from "../providers/modalProvider";
import ToastProvider from "../providers/toastProvider";
import CreateRecipeModal from "../components/modals/createNewRecipe/createRecipeModal";
import DefaultMetaData from "../components/header/defaultMetaData";
import UserProvider from "../providers/userProvider";
import { createAuthClient } from "better-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const authClient = createAuthClient({
    baseURL: "http://127.0.0.1:3001"
});

export const queryClient = new QueryClient();

function Base() {
    return (
        <QueryClientProvider client={queryClient}>
            <UserProvider>
                <RecipeProvider>
                    <ModalProvider>
                        <SlideProvider>
                            <ChatProvider>
                                <ToastProvider>
                                    <DefaultMetaData />
                                    <Outlet />
                                    <CreateRecipeModal />
                                </ToastProvider>
                            </ChatProvider>
                        </SlideProvider>
                    </ModalProvider>
                </RecipeProvider>
            </UserProvider>
        </QueryClientProvider>
    );
}

export default Base;
