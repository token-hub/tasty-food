import { Outlet, useParams } from "react-router";
import BaseHeader from "./baseHeader";
import Main from "./main";
import Chat from "../components/main/chat/chat";
import Filter from "../components/sidebar/filter";
import FilterMobile from "../components/sidebar/filterMobile";
import { useUserContext } from "../providers/userProvider";

function Public() {
    const { user } = useUserContext;
    const params = useParams();
    const leftSideClasses = params?.recipe ? "col-md-1" : "col-md-3 col-lg-2";
    const rightSideClasses = params?.recipe ? "col-md-10" : "col-md-9 col-lg-10";
    return (
        <>
            <BaseHeader />
            <div className="container">
                <div className="row mt-3 ">
                    <div className={leftSideClasses}>
                        {!params?.recipe && (
                            <>
                                <Filter />
                                <FilterMobile />
                            </>
                        )}
                    </div>
                    <div className={rightSideClasses}>
                        <Main>
                            <Outlet />
                        </Main>
                    </div>
                </div>
            </div>
            {user && <Chat />}
        </>
    );
}

export default Public;
