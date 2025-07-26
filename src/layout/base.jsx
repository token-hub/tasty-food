import { Outlet } from "react-router";
import BaseHeader from "./baseHeader";
import Sidebar from "../components/sidebar/sidebar";

function Base() {
    return (
        <>
            <BaseHeader />
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-10">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Base;
