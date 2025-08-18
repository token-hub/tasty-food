import ChatIcon from "../../../assets/icons/chatIcon";
import ArchiveIcon from "../../../assets/icons/archiveIcon";
import EditIcon from "../../../assets/icons/editIcon";
import { isAuthor } from "../../../lib/constants";
import { useModalContext } from "../../../providers/modalProvider";
import { useChatContext } from "../../../providers/chatProvider";
import { MODAL_MODES } from "../../../lib/constants";
import { useSlideContext } from "../../../providers/slideProvider";
import ChatMaximizedBody from "../chat/chatMaximizedBody";

function RecipeHeaders({ recipe }) {
    let { imageSource, goodForPeopleCount, description } = recipe;
    const { setCurrentModal } = useModalContext();
    const { handleOpenChat } = useChatContext();
    const { openSlide } = useSlideContext();

    function handleEdit() {
        setCurrentModal("recipe", MODAL_MODES[1]);
    }

    function handleOpenMobileChatSlide() {
        openSlide({
            open: true,
            header: recipe.author.name,
            component: <ChatMaximizedBody convoWith={recipe.author.name} mobileView />
        });
    }

    return (
        <div className="row">
            <div className="col-lg-3">
                <div className="d-flex w-100">
                    <img src={imageSource} alt="sample" className="img-fluid rounded mb-3 ms-auto me-auto" />
                </div>
            </div>
            <div className="col-lg-8">
                <div className="d-flex flex-column flex-md-row">
                    <h2 className="fw-bold mb-0 mb-md-3  flex-md-grow-1">Sinigang na Baboy</h2>
                    {isAuthor && (
                        <div className=" d-md-block">
                            <button className="btn px-2 border-0" onClick={handleEdit} data-bs-toggle="modal" data-bs-target="#createRecipe">
                                <EditIcon className="text-secondary" height="18" width="18" />
                            </button>
                            <button className="btn px-2 border-0">
                                <ArchiveIcon className="text-secondary" height="18" width="18" />
                            </button>
                        </div>
                    )}
                </div>
                <p className="lead">{description}</p>
                <p className="m-0">
                    Good for <span className="fw-bold">{goodForPeopleCount}</span> {goodForPeopleCount > 1 ? "people" : "person"}
                </p>
                <div className="timers my-2">
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
                    <button type="button" className="btn border-0 p-0 d-none d-md-block" onClick={handleOpenChat}>
                        <ChatIcon className="mt-n1 text-secondary" />
                    </button>
                    <button type="button" className="btn border-0 p-0 d-block d-md-none" onClick={handleOpenMobileChatSlide}>
                        <ChatIcon className="mt-n1 text-secondary" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RecipeHeaders;
