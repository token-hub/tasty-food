import RecipeRating from "./recipeRating";
import RecipeForm from "./recipeForm";
import Pagination from "../pagination";
import { useUserContext } from "../../../providers/userProvider";
import { useQuery } from "@tanstack/react-query";
import { getRatingsTotalCount } from "../../../queries/getRatingsTotalCount";

function RecipeRatings({ recipe, ratings, recipeAuthorId }) {
    const { user } = useUserContext();
    const isNotTheAuthor = user?.id !== recipeAuthorId;
    const { data: { details: { count } = {} } = {} } = useQuery({
        queryKey: ["rating", "count"],
        queryFn: ({ signal }) => getRatingsTotalCount({ signal, recipeId: recipe?._id }),
        enabled: Boolean(recipe?._id)
    });

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
                <Pagination total={count} />
            </div>
        </div>
    );
}

export default RecipeRatings;
