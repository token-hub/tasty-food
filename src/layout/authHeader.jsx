import { Link } from "react-router";

function Header() {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <Link to="/" className="navbar-brand text-primary">
                        Tasty Food
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Header;
