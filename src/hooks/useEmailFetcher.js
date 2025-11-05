import { useEffect } from 'react';
import { useToastStore } from '../stores/useToastStore';
import { useFetcher } from 'react-router';

export function useEmailFetcher() {
    const fetcher = useFetcher();
    const createToast = useToastStore((state) => state.createToast);

    useEffect(() => {
        if (fetcher?.data?.error) {
            createToast({ headerText: 'Server Error', bodyText: fetcher?.data?.error, isSuccess: false });
        }

        if (fetcher?.data?.result) {
            createToast({
                headerText: `Email verification sent`,
                bodyText: `An email verification was successfull sent to your email`
            });
        }
    }, [fetcher, createToast]);

    return { fetcher };
}
