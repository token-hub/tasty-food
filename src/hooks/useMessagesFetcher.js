import { useFetcher } from 'react-router';
import { useToastStore } from '../stores/useToastStore';
import { useLayoutEffect, useEffectEvent } from 'react';
import { usePagination } from './usePagination';
import { useChatStore } from '../stores/useChatStore';

export function useMessagesFetcher() {
    const { pagination, setPagination } = usePagination({ limit: 10 });
    const selectedConvo = useChatStore((state) => state.selectedConvo);
    const updateSelectedConvo = useChatStore((state) => state.updateSelectedConvo);
    const fetcher = useFetcher();
    const createToast = useToastStore((state) => state.createToast);
    const convoMessagesLength = +selectedConvo?.messages?.length;

    const loadMessages = useEffectEvent((messages) => {
        if (!selectedConvo) return;
        const lastMessage = messages[0];
        const totalFetchedMessages = messages.length;
        const exist = messages.every((m) => selectedConvo.messages.find((im) => im._id == m._id));

        if (!exist) {
            setPagination((prev) => {
                return { ...prev, cursor: lastMessage.updatedAt };
            });

            updateSelectedConvo((prev) => ({
                ...prev,
                messages: [...messages, ...prev.messages]
            }));
        } else {
            if (totalFetchedMessages > 0) {
                const previousTopMessage = selectedConvo.messages[totalFetchedMessages];
                const id = previousTopMessage?.messageId ?? previousTopMessage._id;
                const targetElement = document.getElementById(id);

                if (targetElement) {
                    targetElement.scrollIntoView();
                }
            }
        }
    });

    useLayoutEffect(() => {
        if (fetcher.data?.error) {
            createToast({ headerText: 'Server Error', bodyText: fetcher?.data?.error, isSuccess: false });
        }

        if (fetcher.data?.result && fetcher.data?.result.length) {
            loadMessages(fetcher?.data?.result.reverse());
        }
    }, [fetcher.data, convoMessagesLength, createToast]);

    return { fetcher, pagination, selectedConvo };
}
