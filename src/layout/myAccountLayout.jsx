import { Outlet } from "react-router";
import BaseHeader from "./baseHeader";
import Sidebar from "../components/sidebar/sidebar";
import MobileFooter from "./mobileFooter";
import Main from "./main";
import RecipeProvider from "../providers/recipeProvider";
import ModalProvider from "../providers/modalProvider";
import CreateRecipeModal from "../components/modals/createNewRecipe/createRecipeModal";

function MyAccountLayout() {
    return (
        <RecipeProvider>
            <ModalProvider>
                <BaseHeader />
                <div className="container">
                    <div className="row mt-3 ">
                        <div className="col-md-3 col-lg-2">
                            <div className="d-none d-md-block">
                                <Sidebar />
                            </div>
                        </div>
                        <div className="col-md-9 col-lg-10">
                            <Main>
                                <Outlet />
                            </Main>
                        </div>
                    </div>
                </div>
                <div className="d-md-none">
                    <MobileFooter />
                </div>
                <CreateRecipeModal />
            </ModalProvider>
        </RecipeProvider>
    );
}

export default MyAccountLayout;
