import Recipe from "../components/main/recipe/recipeClickable";
import Pagination from "../components/main/pagination";
import { usePagination } from "../hooks/usePagination";
import { useRecipes } from "../hooks/useRecipes";

function Recipes() {
    const { pagination, setPagination } = usePagination();
    const { data, dataCount } = useRecipes(pagination);

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
