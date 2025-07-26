import { Link } from "react-router";

function MenuDropDown({ children }) {
    return (
        <div className="d-none d-md-block dropdown">
            {children}
            <ul className="dropdown-menu mt-2 ms-n6">
                <li>
                    <Link to="/me" className="dropdown-item">
                        My Account
                    </Link>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li>
                    <Link to="/auth" className="dropdown-item">
                        Logout
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default MenuDropDown;
