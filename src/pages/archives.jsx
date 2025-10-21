import Recipe from '../components/main/recipe/recipeClickable';
import Pagination from '../components/main/pagination';
import { useQuery } from '@tanstack/react-query';
import { useUserStore } from '../stores/useUserStore';
import { getOwnRecipes } from '../queries/getOwnRecipes';
import { useArchiveFetcher } from '../hooks/useArchiveFetcher';
import { usePagination } from '../hooks/usePagination';
import { getRecipesTotalCount } from '../queries/getRecipesTotalCount';

function Archives() {
    const { pagination, setPagination } = usePagination();
    const user = useUserStore((state) => state.user);
    const { fetcher } = useArchiveFetcher();
    const { data } = useQuery({
        queryKey: ['recipes', 'archives'],
        queryFn: ({ signal }) =>
            getOwnRecipes({
                signal,
                author: {
                    userId: user?.id
                },
                isArchive: true,
                pagination
            }),
        enabled: Boolean(user)
    });

    const { data: dataCount } = useQuery({
        queryKey: ['recipes', 'count'],
        queryFn: ({ signal }) =>
            getRecipesTotalCount({
                signal,
                author: {
                    userId: user?.id
                },
                isArchive: true
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
                {data?.details?.recipes &&
                    data?.details?.recipes.map((recipe) => {
                        return (
                            <div key={recipe.name} className=" col-md-6 col-xl-4 mb-3">
                                <Recipe recipe={recipe} isArchived fetcher={fetcher} />
                            </div>
                        );
                    })}
            </div>
            <Pagination
                onChange={handlePagination}
                currentPage={pagination.page}
                total={dataCount?.details?.recipeTotalCount}
            />
        </div>
    );
}

export default Archives;
