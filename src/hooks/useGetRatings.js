import { useQuery } from '@tanstack/react-query';
import { getRatingsTotalCount } from '../queries/getRatingsTotalCount';
import { getRatings } from '../queries/getRatings';

export function useGetRatings(recipeId, pagination) {
    const { data: { details: count = {} } = {} } = useQuery({
        queryKey: ['ratings', 'count'],
        queryFn: ({ signal }) => getRatingsTotalCount({ signal, recipeId }),
        enabled: Boolean(recipeId),
        staleTime: 1000 * 60 * 30
    });

    const { data: { details: nextRatings = {} } = {} } = useQuery({
        queryKey: ['ratings'],
        queryFn: ({ signal }) => getRatings({ signal, recipeId: recipeId, pagination }),
        enabled: Boolean(recipeId && pagination.page > 1)
    });

    return { count, nextRatings };
}
