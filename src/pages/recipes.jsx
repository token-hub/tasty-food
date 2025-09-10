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
    const { page, handlePagination } = usePagination();
    const { pathname } = useLocation();
    const { user } = useUserContext();
    const isOwnRecipesPage = pathname.includes("recipes");
    const queryKey = isOwnRecipesPage ? "own" : "";
    const queryFn = isOwnRecipesPage ? getOwnRecipes : getRecipes;
    const option = isOwnRecipesPage
        ? {
              author: {
                  userId: user?.id
              },
              pagination: {
                  page: page
              }
          }
        : null;

    const { data } = useQuery({
        queryKey: ["recipes", queryKey, page],
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
            <Pagination onChange={handlePagination} currentPage={page} total={dataCount?.details?.recipeTotalCount} />
        </div>
    );
}

export default Recipes;
