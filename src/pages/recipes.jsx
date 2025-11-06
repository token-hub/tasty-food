import Recipe from '../components/main/recipe/recipeClickable';
import Pagination from '../components/main/pagination';
import { usePagination } from '../hooks/usePagination';
import { useRecipes } from '../hooks/useRecipes';
import { useLocation } from 'react-router';

function Recipes() {
    const { pathname } = useLocation();
    const { pagination, setPagination } = usePagination();
    const { data, dataCount, isLoading } = useRecipes(pagination);

    function handlePagination(page) {
        setPagination((prev) => ({
            ...prev,
            page,
            cursor: data?.details?.recipes[0].updatedAt
        }));
    }

    let title = pathname.split('/')[1] ? `${pathname.split('/')[1]}'s recipes ` : 'Tasty Food';
    if (title.includes('me')) {
        title = 'my recipes';
    }
    title = title[0].toUpperCase() + title.slice(1);

    return (
        <>
            <title>{title}</title>
            <div className="container">
                <div className="row">
                    {isLoading && (
                        <p className="text-center my-8">
                            <span className="spinner-border spinner-border-lg me-2 text-primary" aria-hidden="true" />
                        </p>
                    )}
                    {!isLoading &&
                        data?.details?.recipes?.length > 0 &&
                        data?.details?.recipes.map((recipe) => {
                            return (
                                <div key={recipe.name} className=" col-md-6 col-xl-4 mb-3">
                                    <Recipe recipe={recipe} />
                                </div>
                            );
                        })}

                    {!isLoading && data?.details?.recipes?.length < 1 && (
                        <div
                            style={{ height: '15rem' }}
                            className="d-flex w-100 justify-content-center align-items-center text-muted"
                        >
                            No data found
                        </div>
                    )}
                </div>
                <Pagination
                    onChange={handlePagination}
                    currentPage={pagination.page}
                    total={dataCount?.details?.recipeTotalCount}
                />
            </div>
        </>
    );
}

export default Recipes;
