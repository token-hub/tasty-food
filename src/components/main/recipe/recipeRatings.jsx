import RecipeRating from "./recipeRating";

function RecipeRatings({ ratings }) {
    return (
        <div className="container">
            {ratings.length ? (
                ratings.map((rating) => <RecipeRating rating={rating} key={rating.id} />)
            ) : (
                <div className="">No ratings found ...</div>
            )}
        </div>
    );
}

export default RecipeRatings;
