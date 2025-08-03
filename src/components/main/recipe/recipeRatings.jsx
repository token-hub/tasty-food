import RecipeRating from "./recipeRating";

function RecipeRatings({ ratings }) {
    return (
        <div className="container">
            {ratings.length ? (
                ratings.map((rating) => <RecipeRating rating={rating} key={rating.id} />)
            ) : (
                <div style={{ height: "15rem" }} className="d-flex w-100 justify-content-center align-items-center text-muted">
                    No ratings found
                </div>
            )}
        </div>
    );
}

export default RecipeRatings;
