import { Outlet } from "react-router";
import CreateRecipeModal from "../components/modals/createNewRecipe/createRecipeModal";
import DefaultMetaData from "../components/header/defaultMetaData";
import MobileSlides from "../components/slides/mobileSlides";
import Toasts from "../components/toast/toasts";

function Base() {
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
