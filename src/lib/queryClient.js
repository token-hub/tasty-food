import { QueryCache, QueryClient } from '@tanstack/react-query';
import { useToastStore } from '../stores/useToastStore';

export const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: (error) => {
            const createToast = useToastStore.getState().createToast;
            createToast({ headerText: 'Server Error', bodyText: error.message, isSuccess: false });
        }
    })
});
