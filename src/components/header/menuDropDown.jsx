import { Link, useSubmit } from "react-router";

function MenuDropDown({ children }) {
    const submit = useSubmit();

    async function handleLogout() {
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
                    <Link to="#" onClick={handleLogout} className="dropdown-item">
                        Logout
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default MenuDropDown;
