import { Outlet } from "react-router";
import CreateRecipeModal from "../components/modals/createNewRecipe/createRecipeModal";
import DefaultMetaData from "../components/header/defaultMetaData";

function Base() {
    return (
        <>
            <DefaultMetaData />
            <Outlet />
            <CreateRecipeModal />
        </>
    );
}

export default Base;
