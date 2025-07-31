import { Link } from "react-router";

function Notification({ imageSource = "https://placehold.co/300x300/png", imageAlt = "default", title = "", description = "", link, isNew = false }) {
    let classes = "notification border px-3 py-3 mb-2 ";
    if (isNew) {
        classes += "bg-white";
    }
    return (
        <Link to={link} className="link-underline link-underline-opacity-0">
            <div className={classes}>
                <div className="row">
                    <div className="col-3 col-lg-3 col-xl-2">
                        <div className="d-flex">
                            <img src={imageSource} alt={imageAlt} className="img-fluid mx-auto" />
                        </div>
                    </div>
                    <div className="col-9 col-lg-9 col-xl-10 p-0">
                        <div className="d-flex flex-column h-100">
                            <div className="flex-grow-1">
                                <h5 className="fs-7 fw-semibold text-dark">{title}</h5>
                                <p className="text-muted m-0 fs-7">{description}</p>
                            </div>
                            <p className="fs-7 text-muted mb-0">07/28/2025</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Notification;
