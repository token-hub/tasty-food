import { Outlet } from "react-router";
import Header from "./authHeader";
function SignUpLogin() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default SignUpLogin;
