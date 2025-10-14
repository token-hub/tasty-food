import { useQuery } from "@tanstack/react-query";
import { getNotifications } from "../queries/getNotifications";
import { useEffect } from "react";
import { useNotificationStore } from "../stores/useNotificationStore";
import { getNotificationsCount } from "../queries/getNotificationsCount";
import { useUserStore } from "../stores/useUserStore";
import { usePagination } from "./usePagination";

export function useGetNofitications() {
    const { pagination, setPagination } = usePagination({ sortBy: "createdAt" });
    const user = useUserStore((state) => state.user);
    const setNotifications = useNotificationStore((state) => state.setNotifications);

    const { data: { details = [] } = {}, isFetching } = useQuery({
        queryKey: ["notifications", pagination.page],
        queryFn: ({ signal }) => getNotifications({ signal, userId: user?.id, pagination }),
        enabled: Boolean(user?.id)
    });

    const { data: { details: count = 0 } = {} } = useQuery({
        queryKey: ["notifications", "count"],
        queryFn: ({ signal }) => getNotificationsCount({ signal, userId: user?.id }),
        enabled: Boolean(user?.id),
        staleTime: 1000 * 60 * 30
    });

    useEffect(() => {
        if (details.length && !isFetching) {
            if (pagination.order === 1) {
                setNotifications(() => details.reverse());
            } else {
                setNotifications(() => details);
            }
        }
    }, [details, isFetching, pagination.order, setPagination, setNotifications]);

    return { details, count, pagination, setPagination };
}
