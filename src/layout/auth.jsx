import { Outlet, Navigate } from "react-router";

// Components
import Chat from "../components/main/chat/chat";
import BaseHeader from "./baseHeader";
import Sidebar from "../components/sidebar/sidebar";
import MobileFooter from "./mobileFooter";
import Main from "./main";
import { useUserContext } from "../providers/userProvider";

function AuthLayout() {
    const { user } = useUserContext();

    return user ? (
        <>
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
        </>
    ) : (
        <Navigate to="/auth" replace />
    );
}

export default AuthLayout;
