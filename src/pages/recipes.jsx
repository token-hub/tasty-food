import Recipe from "../components/main/recipe/recipeClickable";
import Pagination from "../components/main/pagination";
import { useQuery } from "@tanstack/react-query";
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

    return (
        <div className="container">
            <div className="row">
                {data?.data?.recipes?.length > 0 &&
                    data?.data?.recipes.map((recipe) => {
                        return (
                            <div key={recipe.name} className=" col-md-6 col-xl-4 mb-3">
                                <Recipe recipe={recipe} />
                            </div>
                        );
                    })}
            </div>
            <Pagination pageSize={6} total={12} />
        </div>
    );
}

export default Recipes;
