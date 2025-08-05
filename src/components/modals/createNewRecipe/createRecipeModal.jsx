import XIcon from "../../../assets/icons/xIcon";

import UploadImage from "./uploadImage";
import UploadVideo from "./uploadVideo";
import Ingredients from "./ingredients";
import Instructions from "./instructions";
import Categories from "./categories";
import Timers from "./timers";
import NameAndDiscription from "./nameAndDiscription";
import { useRecipeContext } from "../../../providers/recipeProvider";
import { useModalContext } from "../../../providers/modalProvider";
import { MODAL_MODES } from "../../../lib/constants";

function CreateRecipeModal() {
    const { recipe } = useRecipeContext();
    const {
        modal: { name, mode }
    } = useModalContext();
    let dataToUse = mode === MODAL_MODES[0] ? {} : recipe;

    return (
        <>
            <div className="modal modal-lg fade" id="createRecipe" tabIndex={-1} aria-labelledby="createRecipe" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Create new Recipe {dataToUse.name}
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form className="form-floating">
                                <UploadImage />
                                <NameAndDiscription />
                                <Timers />
                                <Categories />
                                <Ingredients />
                                <Instructions />
                                <UploadVideo />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateRecipeModal;
