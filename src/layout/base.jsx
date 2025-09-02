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

export const authClient = createAuthClient({
    baseURL: "http://127.0.0.1:3001"
});

function Base() {
    return (
        <RecipeProvider>
            <ModalProvider>
                <SlideProvider>
                    <ChatProvider>
                        <ToastProvider>
                            <UserProvider>
                                <DefaultMetaData />
                                <Outlet />
                                <CreateRecipeModal />
                            </UserProvider>
                        </ToastProvider>
                    </ChatProvider>
                </SlideProvider>
            </ModalProvider>
        </RecipeProvider>
    );
}

export default Base;
