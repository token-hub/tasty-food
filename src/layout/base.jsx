import { Outlet } from "react-router";
import BaseHeader from "./baseHeader";
import Main from "./main";
import Chat from "../components/main/chat/chat";
import { isAuthenticated } from "../lib/constants";
import SlideProvider from "../providers/slideProvider";
function Base() {
    return (
        <SlideProvider>
            <BaseHeader />
            <div className="container">
                <div className="d-none d-md-block">
                    <div className="row mt-3 ">
                        <div className="col-md-3 col-lg-2">{/* <Sidebar /> */}</div>
                        <div className="col-md-9 col-lg-10">
                            <Main>
                                <Outlet />
                            </Main>
                        </div>
                    </div>
                </div>
            </div>
            {isAuthenticated && <Chat />}
        </SlideProvider>
    );
}

export default Base;
