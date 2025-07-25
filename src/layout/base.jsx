import { Outlet } from "react-router";
import BaseHeader from "./baseHeader";

function Base() {
    return (
        <>
            <BaseHeader />
            <Outlet />
        </>
    );
}

export default Base;
