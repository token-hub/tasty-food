import RecipeRating from "./recipeRating";
import RecipeForm from "./recipeForm";
import Pagination from "../pagination";
import { currentUser } from "../../../lib/constants";
function RecipeRatings({ ratings, recipeAuthorId }) {
    const isNotTheAuthor = currentUser.id !== recipeAuthorId;
    return (
        <div className="container">
            {isNotTheAuthor && (
                <>
                    <hr className="mt-3" />
                    <RecipeForm />
                </>
            )}

            {ratings.length ? (
                ratings.map((rating) => <RecipeRating rating={rating} key={rating.id} />)
            ) : (
                <div style={{ height: "15rem" }} className="d-flex w-100 justify-content-center align-items-center text-muted">
                    No ratings found
                </div>
            )}

            <div className="mt-3">
                <Pagination pageSize={5} total={10} />
            </div>
        </div>
    );
}

export default RecipeRatings;
