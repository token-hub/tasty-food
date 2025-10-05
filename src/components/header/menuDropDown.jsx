import { Link, useSubmit } from "react-router";
import { useSocketContext } from "../../providers/socketProvider";
import { useUserStore } from "../../stores/useUserStore";

function MenuDropDown({ children }) {
    const user = useUserStore((state) => state.user);
    const { socket } = useSocketContext();
    const submit = useSubmit();

    async function handleLogout() {
        if (socket) {
            socket.emit("logout", { id: user?.id });
        }

        submit(null, { action: "/signOut", method: "POST" });
    }

    return (
        <div className="d-none d-md-block dropdown">
            {children}
            <ul className="dropdown-menu mt-2 ms-n6">
                <li>
                    <Link to="/me/profile" className="dropdown-item">
                        My Account
                    </Link>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li>
                    <button className="btn" onClick={handleLogout}>
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default MenuDropDown;
