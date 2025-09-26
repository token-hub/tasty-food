import { Outlet } from "react-router";
import CreateRecipeModal from "../components/modals/createNewRecipe/createRecipeModal";
import DefaultMetaData from "../components/header/defaultMetaData";
import MobileSlides from "../components/slides/mobileSlides";

function Base() {
    return (
        <>
            <DefaultMetaData />
            <MobileSlides />
            <Outlet />
            <CreateRecipeModal />
        </>
    );
}

export default Base;
