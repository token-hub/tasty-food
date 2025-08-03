import { Rating } from "react-simple-star-rating";
function RecipeForm() {
    function handleRating() {
        // do something here
    }

    return (
        <form className="mt-4">
            <div className="mb-3">
                <label htmlFor="rating" className="form-label">
                    Your rating for this recipe:
                </label>
                <Rating onClick={handleRating} />
            </div>
            <div className="form-floating">
                <textarea
                    className="form-control bg-light"
                    placeholder="Leave a comment here ..."
                    id="floatingTextarea2"
                    style={{ height: 100 }}
                    defaultValue={""}
                />
            </div>

            <div className="d-flex">
                <button type="submit" className="btn btn-primary text-white mt-3 ms-auto">
                    Submit
                </button>
            </div>
        </form>
    );
}

export default RecipeForm;
