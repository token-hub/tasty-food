import { useFetcher, useNavigate } from "react-router";
import { useToastContext } from "../providers/toastProvider";
import { useEffect } from "react";

export function useCreateRating() {
    const navigate = useNavigate();
    const { createToast } = useToastContext();
    const fetcher = useFetcher();
    useEffect(() => {
        if (fetcher?.data?.error) {
            createToast({ headerText: "Server Error", bodyText: fetcher?.data?.error, isSuccess: false });
        }

        if (fetcher.data?.result) {
            createToast({ headerText: "Recipe rating created", bodyText: "You have successfull submitted a rating" });
        }
    }, [fetcher, createToast, navigate]);

    return { fetcher };
}
