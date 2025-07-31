import { Link } from "react-router";

function Notification({ imageSource = "https://placehold.co/300x300/png", imageAlt = "default", title = "", description = "", link }) {
    return (
        <Link to={link} className="link-underline link-underline-opacity-0">
            <div className="notification border px-3 py-3 mb-2">
                <div className="row">
                    <div className="col-3 col-lg-3 col-xl-2">
                        <div className="d-flex">
                            <img src={imageSource} alt={imageAlt} className="img-fluid mx-auto" />
                        </div>
                    </div>
                    <div className="col-9 col-lg-9 col-xl-10 p-0">
                        <h5 className="fs-7 fw-semibold text-dark">{title}</h5>
                        <p className="text-muted m-0 fs-7">{description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Notification;
