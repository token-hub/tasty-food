import { Link } from "react-router";
import UserIcon from "../assets/icons/userIcon";
import SearchBar from "../components/searchBar";
import SignInIcon from "../assets/icons/signInIcon";
import { isAuthenticated } from "../lib/constants";

function BaseHeader() {
    return (
        <>
            <nav className="navbar navbar-light bg-primary">
                <div className="container my-1">
                    <div className="d-flex align-items-center w-100">
                        <Link to="/" className="navbar-brand text-white fs-4 flex-grow-1 flex-sm-grow-0">
                            Tasty Food
                        </Link>
                        <div className="d-none d-sm-flex flex-grow-1 ">
                            <SearchBar />
                        </div>
                        {isAuthenticated ? (
                            <>
                                <span className="text-white fs-6 me-2">John</span> <UserIcon className="text-white" height="20" width="20" />
                            </>
                        ) : (
                            <>
                                <span className="text-white fs-6 me-2">Sign In</span> <SignInIcon className="text-white" height="20" width="20" />
                            </>
                        )}
                    </div>
                    <div className="d-flex d-sm-none w-100 mt-2">
                        <SearchBar inputWidth="w-100" />
                    </div>
                </div>
            </nav>
        </>
    );
}

export default BaseHeader;
