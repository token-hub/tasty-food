import Notification from "../components/main/notification";
import { useNotificationStore } from "../stores/useNotificationStore";
import Pagination from "../components/main/pagination";
import { useGetNofitications } from "../hooks/useGetNotifications";
import { useFetcher } from "react-router";
import { objectToFormData } from "../lib/utilities";
import { useUserStore } from "../stores/useUserStore";

function Notifications() {
    const notifications = useNotificationStore((state) => state.notifications);
    const { details, count, pagination, setPagination } = useGetNofitications();
    const user = useUserStore((state) => state.user);

    const fetcher = useFetcher();

    function handlePagination(page) {
        let cursor = notifications[notifications.length - 1].updatedAt;
        let order = -1;
        let skip = 0;
        const pageDifference = Math.abs(page - pagination.page);

        if (page < pagination.page) {
            order = 1;
            cursor = notifications[0].updatedAt;
        }

        if (pageDifference > 1) {
            skip = pagination.limit;
        }

        setPagination((prev) => ({
            ...prev,
            page,
            cursor,
            skip,
            order
        }));
    }

    function markAsRead(notificationId) {
        if (!notificationId || !user) return;
        fetcher.submit(
            objectToFormData({
                notificationId,
                userId: user.id
            }),
            { action: "/me/notifications/markAsReadNotification", method: "PUT" }
        );
    }

    return (
        <div className="container">
            {notifications.length > 0 ? (
                notifications.map((notification) => {
                    return (
                        <Notification
                            onclick={markAsRead}
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
            <div className="mt-3">
                <Pagination onChange={handlePagination} currentPage={pagination.page} total={count} />
            </div>
        </div>
    );
}

export default Notifications;
