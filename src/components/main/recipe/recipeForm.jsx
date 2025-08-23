import { Rating } from "react-simple-star-rating";
import EditIcon from "../../../assets/icons/editIcon";
import XIcon from "../../../assets/icons/xIcon";
import { currentUser } from "../../../lib/constants";
import { useState } from "react";

function RecipeForm() {
    // this is only temporary,
    // the current user own rating will be fetch separately from the recipe rating itself
    // const [rating, setRating] = useState(currentUser.rating);
    const [rating, setRating] = useState();
    const [isEditting, setIsEditting] = useState(false);

    const showSubmitBtn = !rating || isEditting;
    const isDisabled = !isEditting && rating;

    function handleRating() {
        // do something here
    }

    function handleEdit() {
        setIsEditting(!isEditting);
    }

    return (
        <form className="mt-4">
            <div className="mb-3">
                <label htmlFor="rating" className="form-label w-100 d-flex m-0">
                    <span className="flex-grow-1">Your rating for this recipe:</span>
                    {rating && (
                        <button type="button" onClick={handleEdit} className="btn p-1 mb-1 text-primary border-0 ms-auto">
                            {!isEditting ? <EditIcon /> : <XIcon />}
                        </button>
                    )}
                </label>
                <Rating readonly={isDisabled} onClick={handleRating} initialValue={rating ? rating.rating : 0} />
                <p className="m-0 text-muted fs-7 ms-2">{rating ? rating.createdAt : null}</p>
            </div>
            <div className="form-floating">
                <textarea
                    className={`form-control ${isDisabled ? "" : "bg-light"}`}
                    placeholder="Leave a comment here ..."
                    id="floatingTextarea2"
                    style={{ height: 100 }}
                    disabled={isDisabled}
                    defaultValue={rating ? rating.comment : ""}
                />
            </div>

            {showSubmitBtn && (
                <div className="d-flex">
                    <button type="submit" className="btn btn-primary text-white mt-3 ms-auto">
                        Submit
                    </button>
                </div>
            )}
        </form>
    );
}

export default RecipeForm;
