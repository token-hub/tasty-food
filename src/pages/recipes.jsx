import Recipe from "../components/main/recipe/recipeClickable";
import Pagination from "../components/main/pagination";
import { useQuery } from "@tanstack/react-query";
import { getRecipesTotalCount } from "../queries/getRecipesTotalCount";
import { getOwnRecipes } from "../queries/getOwnRecipes";
import { getRecipes } from "../queries/getRecipes";
import { useUserContext } from "../providers/userProvider";
import { useLocation } from "react-router";
import { usePagination } from "../hooks/usePagination";

function Recipes() {
    const { pagination, setPagination } = usePagination();
    const { pathname, state } = useLocation();
    const { user } = useUserContext();
    const isOtherUsersPage = state?.authorId;
    const isOwnRecipesPage = pathname.includes("recipes");
    const queryKey = isOwnRecipesPage ? "own" : "";
    const queryFn = isOwnRecipesPage || isOtherUsersPage ? getOwnRecipes : getRecipes;
    const option = { pagination };
    if (isOwnRecipesPage || isOtherUsersPage) {
        option.author = {
            userId: state?.authorId ?? user?.id
        };
    }

    const { data } = useQuery({
        queryKey: ["recipes", queryKey, pagination.page],
        queryFn: ({ signal }) =>
            queryFn({
                signal,
                ...option
            }),
        enabled: user ? Boolean(user) : true
    });
    const { data: dataCount } = useQuery({
        queryKey: ["recipes", "count"],
        queryFn: ({ signal }) =>
            getRecipesTotalCount({
                signal,
                ...option
            })
    });

    function handlePagination(page) {
        setPagination((prev) => ({
            ...prev,
            page,
            cursor: data?.details?.recipes[0].updatedAt
        }));
    }

    return (
        <div className="container">
            <div className="row">
                {data?.details?.recipes?.length > 0 &&
                    data?.details?.recipes.map((recipe) => {
                        return (
                            <div key={recipe.name} className=" col-md-6 col-xl-4 mb-3">
                                <Recipe recipe={recipe} />
                            </div>
                        );
                    })}
            </div>
            <Pagination onChange={handlePagination} currentPage={pagination.page} total={dataCount?.details?.recipeTotalCount} />
        </div>
    );
}

export default Recipes;
