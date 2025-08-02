import ChatIcon from "../../../assets/icons/chatIcon";
import ArchiveIcon from "../../../assets/icons/archiveIcon";
import EditIcon from "../../../assets/icons/editIcon";
import { isAuthor } from "../../../lib/constants";

function RecipeHeaders({ recipe }) {
    let { imageSource, goodForPeopleCount, description } = recipe;
    return (
        <div className="row">
            <div className="col-3">
                <img src={imageSource} alt="sample" className="img-fluid rounded" />
            </div>
            <div className="col-8">
                <div className="d-flex">
                    <h2 className="fw-bold mb-3 flex-grow-1">Sinigang na Baboy</h2>
                    {isAuthor && (
                        <div>
                            <button className="btn px-2">
                                <EditIcon className="text-secondary" height="18" width="18" />
                            </button>
                            <button className="btn px-2">
                                <ArchiveIcon className="text-secondary" height="18" width="18" />
                            </button>
                        </div>
                    )}
                </div>
                <p className="lead">{description}</p>
                <p className="m-0">
                    Good for <span className="fw-bold">{goodForPeopleCount}</span> {goodForPeopleCount > 1 ? "people" : "person"}
                </p>
                <div className="timers d-flex">
                    <p className="m-0 me-2">
                        <span className="fw-bold">Prep: </span> 25 minutes
                    </p>
                    <p className="m-0 me-2">
                        <span className="fw-bold">Cook: </span> 35 minutes
                    </p>
                    <p className="m-0">
                        <span className="fw-bold">Total: </span> 1 hour
                    </p>
                </div>

                <div className="d-flex align-items-center">
                    <p className="me-1 m-0">
                        <span className="fw-bold">Author:</span> John Doe
                    </p>
                    <ChatIcon className="mt-n1 text-secondary" />
                </div>
            </div>
        </div>
    );
}

export default RecipeHeaders;
