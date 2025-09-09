import { Outlet, useNavigate } from "react-router";
import Header from "./authHeader";
import { useUserContext } from "../providers/userProvider";
import { useEffect } from "react";

function SignUpLogin() {
    const { user, isLoading } = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && user) {
            navigate("/");
        }
    }, [isLoading, user, navigate]);

    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default SignUpLogin;
