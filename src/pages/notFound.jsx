import { Link } from "react-router";

const NotFound = () => {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100 flex-column p-3 text-center">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/">Go to Homepage</Link>
        </div>
    );
};

export default NotFound;
