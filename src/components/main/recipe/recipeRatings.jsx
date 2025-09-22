import RecipeRating from "./recipeRating";
import RecipeForm from "./recipeForm";
import Pagination from "../pagination";
import { useUserContext } from "../../../providers/userProvider";
import { usePagination } from "../../../hooks/usePagination";
import { useGetRatings } from "../../../hooks/useGetRatings";

function RecipeRatings({ recipe, ratings, recipeAuthorId }) {
    const { user } = useUserContext();
    const { pagination, setPagination } = usePagination();
    const { count, nextRatings } = useGetRatings(recipe?._id, pagination);
    const isNotTheAuthor = user?.id !== recipeAuthorId;
    function handlePagination(page) {
        let cursor = ratings[0].updatedAt;
        const isFirstPageGoingSecond = pagination.page === 1 && page === 2;

        if (!isFirstPageGoingSecond) {
            cursor = nextRatings?.ratings[0].updatedAt;
        }

        setPagination((prev) => ({
            ...prev,
            page,
            cursor
        }));
    }

    const isThereTopFiveRatings = ratings?.length > 0 && pagination.page === 1;
    const isThereNextPageRatings = nextRatings?.ratings?.length > 0 && pagination.page > 1;
    const isNoRatingsFound = ratings.length < 1 || (pagination.page > 1 && !nextRatings?.ratings?.length);

    return (
        <div className="container">
            {isNotTheAuthor && (
                <>
                    <hr className="mt-3" />
                    <RecipeForm />
                </>
            )}

            {isThereTopFiveRatings && ratings.map((rating) => <RecipeRating rating={rating} key={rating.id} />)}
            {isThereNextPageRatings && nextRatings?.ratings.map((rating) => <RecipeRating rating={rating} key={rating.id} />)}
            {isNoRatingsFound && (
                <div style={{ height: "15rem" }} className="d-flex w-100 justify-content-center align-items-center text-muted">
                    No ratings found
                </div>
            )}

            <div className="mt-3">
                <Pagination onChange={handlePagination} currentPage={pagination.page} total={count} />
            </div>
        </div>
    );
}

export default RecipeRatings;
