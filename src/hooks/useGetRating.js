import { useQuery } from "@tanstack/react-query";
import { getRating } from "../queries/getRating";
import { useEffect, useState } from "react";
const defaultRating = {
    recipeId: "",
    comment: "",
    rate: 0,
    rater: {
        raterId: "",
        name: ""
    },
    likes: []
};
export function useGetRating(recipeId, userId) {
    const [rating, setRating] = useState(defaultRating);

    const { data, isLoading } = useQuery({
        queryKey: ["rating"],
        queryFn: ({ signal }) => getRating({ signal, recipeId, userId }),
        enabled: Boolean(recipeId && userId)
    });

    useEffect(() => {
        if (!rating?._id && !isLoading && data) {
            setRating(data?.details);
        }
    }, [data, isLoading, rating]);

    return { rating, setRating, isLoading };
}
