import { useState, useCallback } from "react";
import UploadImage from "./uploadImage";
import UploadVideo from "./uploadVideo";
import Ingredients from "./ingredients";
import Instructions from "./instructions";
import Categories from "./categories";
import Timers from "./timers";
import NameAndDiscription from "./nameAndDiscription";
import ProgressBar from "./progressBar";
import { useRecipeContext } from "../../../providers/recipeProvider";
import { useModalContext } from "../../../providers/modalProvider";
import { MODAL_MODES, DEFAULT_RECIPE_STATE } from "../../../lib/constants";
import { useProgress } from "../../../hooks/useProgress";
import { useUserContext } from "../../../providers/userProvider";

function CreateRecipeModal() {
    const { recipe } = useRecipeContext();
    const { user } = useUserContext();
    const [recipeState, setRecipeState] = useState(recipe ?? DEFAULT_RECIPE_STATE);

    const {
        modal: { name, mode, show },
        reset
    } = useModalContext();
    const { handleNext, handlePrevious, showPrevButton, hideNextButton, firstPart, secondPart, thirdPart, fourthPart, progress } = useProgress(show);

    const isEditting = mode === MODAL_MODES[1];

    const handleRecipeState = useCallback((event) => {
        let name = event.target.name;
        let value = event.target.value;

        setRecipeState((state) => {
            if (name === "image") {
                value = event.target.files[0];
            }

            if (name === "video") {
                value = event.target.files[0];
            }

            if (name === "prepHours") {
                name = "prepTime";
                value = { ...state.prepTime, hours: +value };
            }

            if (name === "prepMinutes") {
                name = "prepTime";
                value = { ...state.prepTime, minutes: +value };
            }

            if (name === "categories") {
                value = state.categories.includes(event.target.id)
                    ? state.categories.filter((c) => c !== event.target.id)
                    : [...state.categories, event.target.id];
            }

            if (name === "unit" || name === "quantity" || name === "ingredient") {
                const targetField = name == "ingredient" ? "name" : name;
                name = "ingredients";

                value = state.ingredients.map((ing) => {
                    if (ing.id === event.target.getAttribute("parentid")) {
                        return { ...ing, [targetField]: value };
                    } else {
                        return ing;
                    }
                });
            }

            if (name === "instruction") {
                name = name + "s";
                value = state.instructions.map((ins) => {
                    if (ins.id === event.target.id) {
                        return { ...ins, instruction: value };
                    } else {
                        return ins;
                    }
                });
            }
            return {
                ...state,
                [name]: value
            };
        });
    }, []);

    function handleSubmit() {
        const prepData = {
            ...recipeState,
            author: {
                userId: user?.id,
                name: user?.name
            }
        };

        console.log(prepData);
    }

    return (
        <>
            <div className="modal modal-lg fade" id="createRecipe" tabIndex={-1} aria-labelledby="createRecipe" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                {isEditting ? "Edit recipe" : "Create new recipe"}
                            </h1>
                            <button type="button" onClick={reset} className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body min-vh-70">
                            {show && (
                                <form className="form-floating">
                                    <ProgressBar now={progress} />
                                    {firstPart && (
                                        <>
                                            <UploadImage recipe={recipeState} onChange={handleRecipeState} />
                                            <NameAndDiscription recipe={recipeState} onChange={handleRecipeState} />
                                            <Timers recipe={recipeState} onChange={handleRecipeState} />
                                            <Categories recipe={recipeState} onChange={handleRecipeState} />
                                        </>
                                    )}
                                    {secondPart && (
                                        <>
                                            <Ingredients recipe={recipeState} onChange={handleRecipeState} />
                                        </>
                                    )}
                                    {thirdPart && (
                                        <>
                                            <Instructions recipe={recipeState} onChange={handleRecipeState} />
                                        </>
                                    )}
                                    {fourthPart && (
                                        <>
                                            <UploadVideo recipe={recipeState} onChange={handleRecipeState} />
                                        </>
                                    )}
                                </form>
                            )}
                        </div>
                        <div className="modal-footer">
                            {showPrevButton && (
                                <button type="button" onClick={handlePrevious} className="btn btn-gray-dark text-white">
                                    Previous
                                </button>
                            )}

                            {!hideNextButton ? (
                                <button type="button" className="btn btn-primary text-white" onClick={handleNext}>
                                    Next
                                </button>
                            ) : (
                                <button type="submit" className="btn btn-primary text-white" onClick={handleSubmit}>
                                    Submit
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateRecipeModal;
