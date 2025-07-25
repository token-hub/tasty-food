import { Outlet } from "react-router";
import Header from "./authHeader";
function AuthLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default AuthLayout;
