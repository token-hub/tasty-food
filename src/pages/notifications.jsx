import { useQuery } from "@tanstack/react-query";
import Notification from "../components/main/notification";
import { useNotificationStore } from "../stores/useNotificationStore";
import { useUserStore } from "../stores/useUserStore";
import { getNotifications } from "../queries/getNotifications";
import { usePagination } from "../hooks/usePagination";
import { useEffect } from "react";

function Notifications() {
    const pagination = usePagination();
    const notifications = useNotificationStore((state) => state.notifications);
    const setNotifications = useNotificationStore((state) => state.setNotifications);
    const user = useUserStore((state) => state.user);

    const { data: { details = [] } = {}, isFetching } = useQuery({
        queryKey: ["notifications"],
        queryFn: ({ signal }) => getNotifications({ signal, userId: user?.id, pagination }),
        enabled: Boolean(user?.id)
    });

    useEffect(() => {
        if (details.length && !isFetching) {
            setNotifications(() => details);
        }
    }, [details, isFetching, setNotifications]);

    return (
        <div className="container">
            {notifications.length > 0 ? (
                notifications.map((notification) => {
                    return (
                        <Notification
                            key={notification._id}
                            notification={notification}
                            title={notification.title}
                            description={notification.description}
                        />
                    );
                })
            ) : (
                <div>
                    <p className="text-center my-3">No notifications yet</p>
                </div>
            )}
        </div>
    );
}

export default Notifications;
