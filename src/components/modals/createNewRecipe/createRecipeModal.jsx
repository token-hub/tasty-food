import { useState, useEffect } from "react";
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
import { MODAL_MODES } from "../../../lib/constants";
import { useProgress } from "../../../hooks/useProgress";

function CreateRecipeModal() {
    const { recipe } = useRecipeContext();
    const [recipeState, setRecipeState] = useState({
        author: {
            name: "John",
            userId: "68a7287130e1273419856675"
        },
        instructions: [],
        ingredients: [
            {
                name: "sibuyas",
                quantity: 3,
                unit: "pc/s"
            }
        ],
        cookTime: {
            hours: 1,
            minutes: 30
        },
        prepTime: {
            hours: 1,
            minutes: 30
        },
        name: "sinigang na baboy",
        description: "Si mama mo sinigang",
        image: {
            name: "sinigang.png",
            size: "dasdasd",
            link: "link"
        }
    });

    const {
        modal: { name, mode, show },
        reset
    } = useModalContext();
    const { handleNext, handlePrevious, showPrevButton, hideNextButton, firstPart, secondPart, thirdPart, fourthPart, progress } = useProgress(show);
    let dataToUse = mode === MODAL_MODES[0] ? {} : recipe;
    const isEditting = mode === MODAL_MODES[1];

    function handleRecipeState(event) {
        const name = event.target.name;
        let value = event.target.value;

        if (name === "image") {
            value = event.target.files[0];
        }

        setRecipeState((state) => {
            return {
                ...state,
                [name]: value
            };
        });
    }

    function handleSubmit() {}
    console.log(recipeState);
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
                                            <UploadImage recipe={dataToUse} onChange={handleRecipeState} />
                                            <NameAndDiscription recipe={dataToUse} onChange={handleRecipeState} />
                                            <Timers recipe={dataToUse} onChange={handleRecipeState} />
                                            <Categories recipe={dataToUse} onChange={handleRecipeState} />
                                        </>
                                    )}
                                    {secondPart && (
                                        <>
                                            <Ingredients recipe={dataToUse} />
                                        </>
                                    )}
                                    {thirdPart && (
                                        <>
                                            <Instructions recipe={dataToUse} />
                                        </>
                                    )}
                                    {fourthPart && (
                                        <>
                                            <UploadVideo />
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
