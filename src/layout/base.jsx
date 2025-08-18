import { Outlet, useParams } from "react-router";
import BaseHeader from "./baseHeader";
import Main from "./main";
import Chat from "../components/main/chat/chat";
import { isAuthenticated } from "../lib/constants";
import SlideProvider from "../providers/slideProvider";
import Filter from "../components/sidebar/filter";
import FilterMobile from "../components/sidebar/filterMobile";
import RecipeProvider from "../providers/recipeProvider";
import ChatProvider from "../providers/chatProvider";

function Base() {
    const params = useParams();

    return (
        <SlideProvider>
            <RecipeProvider>
                <ChatProvider>
                    <BaseHeader />
                    <div className="container">
                        <div className="row mt-3 ">
                            <div className="col-md-3 col-lg-2">
                                {!params?.recipe && (
                                    <>
                                        <Filter />
                                        <FilterMobile />
                                    </>
                                )}
                            </div>
                            <div className="col-md-9 col-lg-10">
                                <Main>
                                    <Outlet />
                                </Main>
                            </div>
                        </div>
                    </div>
                    {isAuthenticated && <Chat />}
                </ChatProvider>
            </RecipeProvider>
        </SlideProvider>
    );
}

export default Base;
