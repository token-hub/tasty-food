import { Link } from "react-router";
import { getFormattedDate } from "../../lib/utilities";

function Notification({ notification, onclick }) {
    const { title = "", description = "", link, isRead = false, updatedAt = null } = notification;
    let classes = "notification border px-3 py-3 mb-2 bg-gray-light ";
    if (isRead) {
        classes += "bg-white";
    }

    const imageSource = notification?.recipe?.imageLink ?? "https://placehold.co/300x300/png";
    const imageAlt = notification?.recipe?.imageLink ? notification?.recipe.name : "default";
    return (
        <div onClick={() => onclick(notification._id)}>
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
                                <p className="fs-7 text-muted mb-0">{getFormattedDate(new Date(updatedAt))}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Notification;
