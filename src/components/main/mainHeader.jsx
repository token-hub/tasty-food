import { Link } from "react-router";

import LeftIcon from "../../assets/icons/leftIcon";

function MainHeader({ text }) {
    return (
        <div className={`${text ? "border-bottom  mb-3" : ""}`}>
            {text && (
                <>
                    <h5 className="text-muted fw-bold d-none d-md-block">{text}</h5>
                    <Link to="/me" relative="path" className="link-underline link-underline-opacity-0 d-md-none">
                        <div className="d-flex align-items-center mb-2 w-100 text-muted">
                            <LeftIcon height="20" width="20" className="me-2 text-tertiary" /> <h5 className=" fw-bold mb-0">{text}</h5>
                        </div>
                    </Link>
                </>
            )}
        </div>
    );
}

export default MainHeader;
