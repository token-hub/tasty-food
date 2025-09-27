import { useModalStore } from "../../../stores/useModalStore";
import { MODAL_MODES } from "../../../lib/constants";

function RecipeAddButton() {
    const setCurrentModal = useModalStore((state) => state.setCurrentModal);

    function handleClick() {
        // create mode
        setCurrentModal("recipe", MODAL_MODES[0]);
    }

    return (
        <button className="btn btn-primary text-white mb-3" onClick={handleClick} data-bs-toggle="modal" data-bs-target="#createRecipe">
            Add
        </button>
    );
}

export default RecipeAddButton;
