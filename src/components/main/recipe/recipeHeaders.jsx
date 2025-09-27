import ChatIcon from "../../../assets/icons/chatIcon";
import ArchiveIcon from "../../../assets/icons/archiveIcon";
import EditIcon from "../../../assets/icons/editIcon";
import { DEFAULT_IMAGE } from "../../../lib/constants";
import { useChatStore } from "../../../stores/useChatStore";
import { MODAL_MODES } from "../../../lib/constants";
import ChatMaximizedBody from "../chat/chatMaximizedBody";
import { useUserContext } from "../../../providers/userProvider";
import { useFetcher, useNavigate } from "react-router";
import { objectToFormData } from "../../../lib/utilities";
import { useToastStore } from "../../../stores/useToastStore";
import { useEffect } from "react";
import { useSlideStore } from "../../../stores/useSlideStore";
import { useModalStore } from "../../../stores/useModalStore";

function RecipeHeaders({ recipe }) {
    const fetcher = useFetcher();
    const navigate = useNavigate();
    const createToast = useToastStore((state) => state.createToast);
    let { image, goodForPeopleCount, description, name } = recipe;
    const setCurrentModal = useModalStore((state) => state.setCurrentModal);
    const handleOpenChat = useChatStore((state) => state.handleOpenChat);
    const { user } = useUserContext();
    const { openSlide } = useSlideStore();
    const imageSource = image ?? DEFAULT_IMAGE;
    const alt = image ? name : "default image";
    const isAuthor = user?.id === recipe.author.userId;

    useEffect(() => {
        if (fetcher.data?.result) {
            createToast({ headerText: "Recipe achived", bodyText: "You have successfull archived a recipe" });
            navigate("/me/archives");
        }
    }, [fetcher, createToast, navigate]);

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

    function handleArchive() {
        fetcher.submit(objectToFormData({ userId: user?.id, recipeId: recipe._id, isArchive: true }), {
            method: "PUT",
            action: "/me/recipes/create"
        });
    }

    function handleUserRecipes() {
        const linkPreFix = isAuthor ? "me" : recipe?.author?.name;
        navigate(`/${linkPreFix}/recipes`, { state: { authorId: recipe?.author?.userId } });
    }

    function handleChat() {
        handleOpenChat();
        fetcher.submit(
            objectToFormData({
                recipe: {
                    recipeId: recipe._id,
                    name: recipe.name,
                    imageLink: recipe?.image?.type?.link
                },
                participants: [
                    {
                        name: user?.name,
                        userId: user?.id
                    },
                    {
                        name: recipe.author.name,
                        userId: recipe.author.userId
                    }
                ]
            }),
            { action: "/:author/recipes/:recipeId/createConversation", method: "POST" }
        );
    }

    return (
        <div className="row">
            <div className="col-lg-3">
                <div className="d-flex w-100">
                    <img src={imageSource} alt={alt} className="img-fluid rounded mb-3 ms-auto me-auto" />
                </div>
            </div>
            <div className="col-lg-8">
                <div className="d-flex flex-column flex-md-row">
                    <h2 className="fw-bold mb-0 mb-md-3 text-capitalize flex-md-grow-1">{recipe.name}</h2>
                    {isAuthor && (
                        <div className=" d-md-block">
                            <button className="btn px-2 border-0" onClick={handleEdit} data-bs-toggle="modal" data-bs-target="#createRecipe">
                                <EditIcon className="text-secondary" height="18" width="18" />
                            </button>
                            <button className="btn px-2 border-0" onClick={handleArchive}>
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
                        <span className="fw-bold">Prep: </span> {recipe?.prepTime.hours} hour/s {recipe?.prepTime.minutes} minutes
                    </p>
                    <p className="m-0 me-2">
                        <span className="fw-bold">Cook: </span> {recipe?.cookTime.hours} hour/s {recipe?.cookTime.minutes} minutes
                    </p>
                </div>

                <div className="d-flex align-items-center">
                    <p className="me-2 m-0 text-capitalize">
                        <span className="fw-bold ">Author:</span>
                        <span className="border-bottom border-primary ms-1" role="button" onClick={handleUserRecipes}>
                            {recipe?.author?.name}
                        </span>
                    </p>

                    {!isAuthor && (
                        <>
                            <button type="button" className="btn border-0 p-0 d-none d-md-block" onClick={handleChat}>
                                <ChatIcon className="mt-n1 text-secondary" />
                            </button>
                            <button type="button" className="btn border-0 p-0 d-block d-md-none" onClick={handleOpenMobileChatSlide}>
                                <ChatIcon className="mt-n1 text-secondary" />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default RecipeHeaders;
