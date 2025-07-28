import { Link } from "react-router";
import RightIcon from "../../assets/icons/rightIcon";

function SubmenuLink({ to = "", text = "" }) {
    return (
        <>
            <Link to={to} className="text-muted text-capitalize link-underline link-underline-opacity-0">
                <div className="d-flex justify-content-between align-items-center border-bottom">
                    <span> {text}</span>
                    <button className="btn text-tertiary">
                        <RightIcon height="20" width="20" />
                    </button>
                </div>
            </Link>
        </>
    );
}

export default SubmenuLink;
