import { Outlet } from "react-router";

// Providers
import RecipeProvider from "../providers/recipeProvider";
import ModalProvider from "../providers/modalProvider";
import SlideProvider from "../providers/slideProvider";

// Components
import CreateRecipeModal from "../components/modals/createNewRecipe/createRecipeModal";
import Chat from "../components/main/chat/chat";
import MobileSlide from "../components/slides/mobileSlide";
import BaseHeader from "./baseHeader";
import Sidebar from "../components/sidebar/sidebar";
import MobileFooter from "./mobileFooter";
import Main from "./main";

function MyAccountLayout() {
    return (
        <div className="position-relative vh-100">
            <RecipeProvider>
                <ModalProvider>
                    <SlideProvider>
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

                            <Chat />
                        </div>
                        <div className="d-md-none ">
                            <MobileFooter />
                        </div>

                        <CreateRecipeModal />
                    </SlideProvider>
                </ModalProvider>
            </RecipeProvider>
        </div>
    );
}

export default MyAccountLayout;
