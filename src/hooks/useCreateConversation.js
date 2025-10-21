import { useFetcher } from 'react-router';
import { queryClient } from '../lib/queryClient';
import { useChatStore } from '../stores/useChatStore';
import { useEffect } from 'react';
import { useToastStore } from '../stores/useToastStore';

export function useCreateConversation() {
    const fetcher = useFetcher();
    const updateSelectedConvo = useChatStore((state) => state.updateSelectedConvo);
    const createToast = useToastStore((state) => state.createToast);

    useEffect(() => {
        if (fetcher.data?.error) {
            createToast({ headerText: 'Server Error', bodyText: fetcher?.data?.error, isSuccess: false });
        }

        if (fetcher.data?.result) {
            updateSelectedConvo(() => fetcher.data?.result);
            queryClient.invalidateQueries({ queryKey: ['chat', 'conversations'] });
        }
    }, [fetcher.data, createToast, updateSelectedConvo]);

    return { fetcher };
}
