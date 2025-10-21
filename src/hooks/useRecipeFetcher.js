import { useFetcher } from 'react-router';
import { useToastStore } from '../stores/useToastStore';
import { useEffect, useRef } from 'react';

export function useRecipeFetcher(recipeId) {
    const fetcher = useFetcher();
    const createToast = useToastStore((state) => state.createToast);
    const closeRef = useRef();

    useEffect(() => {
        if (fetcher.state === 'idle' && fetcher.data) {
            closeRef.current.click();
        }

        if (fetcher?.data?.error) {
            createToast({ headerText: 'Server Error', bodyText: fetcher?.data?.error, isSuccess: false });
        }

        if (fetcher?.data?.result) {
            const headerText = !recipeId ? 'Create recipe success' : 'Update recipe success';
            const bodyText = !recipeId ? 'New recipe has been create' : 'Recipe has been successfully update';
            createToast({ headerText, bodyText });
        }
    }, [fetcher, createToast, recipeId]);

    return { closeRef, fetcher };
}
