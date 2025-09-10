import Recipe from "../components/main/recipe/recipeClickable";
import Pagination from "../components/main/pagination";
import { useQuery } from "@tanstack/react-query";
import { useUserContext } from "../providers/userProvider";
import { getOwnRecipes } from "../queries/getOwnRecipes";
import { useArchiveFetcher } from "../hooks/useArchiveFetcher";

function Archives() {
    const { user } = useUserContext();
    const { fetcher } = useArchiveFetcher();
    const { data } = useQuery({
        queryKey: ["recipes", "archives"],
        queryFn: ({ signal }) =>
            getOwnRecipes({
                signal,
                author: {
                    userId: user?.id
                },
                isArchive: true
            }),
        enabled: Boolean(user)
    });
    return (
        <div className="container">
            <div className="row">
                {data?.data?.recipes &&
                    data?.data?.recipes.map((recipe) => {
                        return (
                            <div key={recipe.name} className=" col-md-6 col-xl-4 mb-3">
                                <Recipe recipe={recipe} isArchived fetcher={fetcher} />
                            </div>
                        );
                    })}
            </div>
            <Pagination pageSize={6} total={12} />
        </div>
    );
}

export default Archives;
