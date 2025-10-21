import { queryClient } from '../lib/queryClient';
import { getOwnRecipes } from '../queries/getOwnRecipes';
import { getSession } from '../queries/getSession';

export async function getOwnRecipesLoader() {
    // needed to use a different queryKey from the userProvider
    // fetching the same session or else, I will have a race
    // condition since, loaders runs first before the
    // providers
    const session = await queryClient.ensureQueryData({
        queryKey: ['userSession'],
        queryFn: ({ signal }) => getSession(signal),
        staleTime: 1000 * 60 * 60 // 1 hour,
    });

    const author = {
        userId: session?.details?.user?.id
    };

    const { data } = await queryClient.fetchQuery({
        queryKey: ['ownRecipes'],
        queryFn: ({ signal }) => getOwnRecipes({ signal, author })
    });

    return {
        recipes: data?.recipes
    };
}
