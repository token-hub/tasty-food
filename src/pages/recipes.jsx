<<<<<<< HEAD
import Recipe from "../components/main/recipe/recipeClickable";
import Pagination from "../components/main/pagination";
import { usePagination } from "../hooks/usePagination";
import { useRecipes } from "../hooks/useRecipes";

function Recipes() {
    const { pagination, setPagination } = usePagination();
    const { data, dataCount } = useRecipes(pagination);
=======
import Recipe from '../components/main/recipe/recipeClickable';
import Pagination from '../components/main/pagination';
import { usePagination } from '../hooks/usePagination';
import { useRecipes } from '../hooks/useRecipes';
import { useEffect } from 'react';
import { useToastStore } from '../stores/useToastStore';

function Recipes() {
    const { pagination, setPagination } = usePagination();
    const createToast = useToastStore((state) => state.createToast);
    const { data, error, dataCount, dataCountError } = useRecipes(pagination);

    useEffect(() => {
        if (error?.message || dataCountError?.message) {
            createToast({ headerText: 'Server Error', bodyText: error.message, isSuccess: false });
        }
    }, [error?.message, dataCountError?.message, createToast]);
>>>>>>> 6e6ee6b (enforce format to the project)

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
                {data?.details?.recipes?.length > 0 ? (
                    data?.details?.recipes.map((recipe) => {
                        return (
                            <div key={recipe.name} className=" col-md-6 col-xl-4 mb-3">
                                <Recipe recipe={recipe} />
                            </div>
                        );
                    })
                ) : (
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
    );
}

export default Recipes;
