import { Outlet } from "react-router";

function Header() {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img
                            src="/docs/5.0/assets/brand/bootstrap-logo.svg"
                            alt=""
                            width={30}
                            height={24}
                            className="d-inline-block align-text-top"
                        />
                        Bootstrap
                    </a>
                </div>
            </nav>

            <Outlet />
        </>
    );
}

export default Header;
