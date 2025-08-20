import { Outlet } from "react-router";
import SlideProvider from "../providers/slideProvider";
import RecipeProvider from "../providers/recipeProvider";
import ChatProvider from "../providers/chatProvider";

function Base() {
    return (
        <RecipeProvider>
            <ModalProvider>
                <SlideProvider>
                    <ChatProvider>
                        <Outlet />
                        <CreateRecipeModal />
                    </ChatProvider>
                </SlideProvider>
            </ModalProvider>
        </RecipeProvider>
    );
}

export default Base;
