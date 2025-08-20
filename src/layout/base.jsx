import { Outlet } from "react-router";
import SlideProvider from "../providers/slideProvider";
import RecipeProvider from "../providers/recipeProvider";
import ChatProvider from "../providers/chatProvider";
import ModalProvider from "../providers/modalProvider";
import CreateRecipeModal from "../components/modals/createNewRecipe/createRecipeModal";

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
