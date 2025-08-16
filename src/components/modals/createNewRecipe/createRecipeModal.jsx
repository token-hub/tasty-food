import XIcon from "../../../assets/icons/xIcon";

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

function CreateRecipeModal() {
    const { recipe } = useRecipeContext();
    const {
        modal: { name, mode, show },
        reset
    } = useModalContext();
    let dataToUse = mode === MODAL_MODES[0] ? {} : recipe;

    return (
        <>
            <div className="modal modal-lg fade" id="createRecipe" tabIndex={-1} aria-labelledby="createRecipe" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Create new Recipe
                            </h1>
                            <button type="button" onClick={reset} className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            {show && (
                                <form className="form-floating">
                                    <ProgressBar now={25} />
                                    <UploadImage recipe={dataToUse} />
                                    <NameAndDiscription recipe={dataToUse} />
                                    <Timers recipe={dataToUse} />
                                    <Categories recipe={dataToUse} />
                                    {/* <Ingredients recipe={dataToUse} />
                                    <Instructions recipe={dataToUse} />
                                    <UploadVideo /> */}
                                </form>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={reset} disabled className="btn btn-gray-dark text-white" data-bs-dismiss="modal">
                                Previous
                            </button>
                            <button type="button" className="btn btn-primary text-white">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateRecipeModal;
