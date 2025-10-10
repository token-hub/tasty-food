import { Link, useNavigate } from "react-router";
import UserIcon from "../assets/icons/userIcon";
import ChatDotsIcon from "../assets/icons/chatDotsIcon";
import SearchBar from "../components/header/searchBar";
import SignInIcon from "../assets/icons/signInIcon";
import MenuDropDown from "../components/header/menuDropDown";
import { useUserStore } from "../stores/useUserStore";
import { useChatStore } from "../stores/useChatStore";

function BaseHeader({ chatCount = 20 }) {
    const handleOpenChat = useChatStore((state) => state.handleOpenChat);
    const user = useUserStore((state) => state.user);
    const navigate = useNavigate();

    function handleSignIn() {
        navigate("/auth");
    }

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

                        {user?.name ? (
                            <>
                                <div className="d-sm-none position-relative" role="button" onClick={() => handleOpenChat(true)}>
                                    <ChatDotsIcon className="text-white me-2" height="20" width="20" />
                                    <span
                                        className="extra-small-text border border-light position-absolute top-0 bg-white text-secondary rounded-circle mt-n2 ms-n3 text-center"
                                        style={{ width: "17px" }}
                                    >
                                        {chatCount}
                                    </span>
                                </div>
                                <MenuDropDown>
                                    <div
                                        className="dropdown-toggle d-flex align-items-center text-white"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <span className="text-white fs-6 me-2 text-capitalize">{user ? user?.name : "no name"}</span>{" "}
                                        <UserIcon className="text-white" height="20" width="20" />
                                    </div>
                                </MenuDropDown>
                            </>
                        ) : (
                            <button className="btn d-flex align-items-center border-0" onClick={handleSignIn}>
                                <span className="text-white fs-6 me-2">Sign In</span> <SignInIcon className="text-white" height="20" width="20" />
                            </button>
                        )}
                    </div>
                    <div className="d-flex d-sm-none w-100 mt-2">
                        <SearchBar inputWidth="w-100" maxWidth="mw-100" />
                    </div>
                </div>
            </nav>
        </>
    );
}

export default BaseHeader;
