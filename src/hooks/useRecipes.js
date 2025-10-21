import { useQuery } from '@tanstack/react-query';
import { getRecipesTotalCount } from '../queries/getRecipesTotalCount';
import { useRecipeStore } from '../stores/useRecipeStore';
import { useLocation } from 'react-router';
import { useUserStore } from '../stores/useUserStore';
import { getOwnRecipes } from '../queries/getOwnRecipes';
import { getRecipes } from '../queries/getRecipes';

export function useRecipes(pagination) {
    const filters = useRecipeStore((state) => state.filters);
    const query = useRecipeStore((state) => state.query);
    const { pathname, state } = useLocation();
    const user = useUserStore((state) => state.user);
    const isHomePage = pathname === '/';
    const isOtherUsersPage = state?.authorId;
    const isOwnRecipesPage = pathname.includes('recipes');
    const parentKey = 'recipes';
    const secondaryKey = isOwnRecipesPage ? 'own' : 'all';
    const recipeQueryKey = [parentKey, secondaryKey, pagination.page];
    const recipeCountQueryKey = [parentKey, 'count'];
    const queryFn = isOwnRecipesPage || isOtherUsersPage ? getOwnRecipes : getRecipes;
    const option = { pagination };

    if (query) {
        option.query = query;
        recipeQueryKey.push(query);
        recipeCountQueryKey.push(query);
    }

    if (isOwnRecipesPage || isOtherUsersPage) {
        option.author = {
            userId: state?.authorId ?? user?.id
        };
    }

    if (isHomePage && filters.length) {
        recipeQueryKey.push(filters.join(','));
        recipeCountQueryKey.push(filters.join(','));
        option.filters = {
            categories: filters
        };
    }

    const { data } = useQuery({
        queryKey: recipeQueryKey,
        queryFn: ({ signal }) =>
            queryFn({
                signal,
                ...option
            }),
        enabled: user ? Boolean(user) : true
    });
    const { data: dataCount } = useQuery({
        queryKey: recipeCountQueryKey,
        queryFn: ({ signal }) =>
            getRecipesTotalCount({
                signal,
                ...option
            })
    });

<<<<<<< HEAD
    return { data, dataCount };
=======
    return { data, error, dataCount, dataCountError };
>>>>>>> 6e6ee6b (enforce format to the project)
}
