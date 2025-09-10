import Recipe from "../components/main/recipe/recipeClickable";
import Pagination from "../components/main/pagination";
import { useQuery } from "@tanstack/react-query";
import { getRecipesTotalCount } from "../queries/getRecipesTotalCount";
import { getOwnRecipes } from "../queries/getOwnRecipes";
import { useUserContext } from "../providers/userProvider";

function Recipes() {
    const { user } = useUserContext();
    const { data } = useQuery({
        queryKey: ["ownRecipes"],
        queryFn: ({ signal }) =>
            getOwnRecipes({
                signal,
                author: {
                    userId: user?.id
                }
            }),
        enabled: Boolean(user)
    });
    const { data: dataCount } = useQuery({
        queryKey: ["recipeCount"],
        queryFn: ({ signal }) =>
            getRecipesTotalCount({
                signal
            }),
        staleTime: 1000 * 60 * 60 // 1 hour,
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
            <Pagination total={dataCount?.details?.recipeTotalCount} />
        </div>
    );
}

export default Recipes;
