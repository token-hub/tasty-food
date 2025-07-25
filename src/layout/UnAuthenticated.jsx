import { Outlet } from "react-router";
import Header from "./header";
function UnAuthenticated() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default UnAuthenticated;
