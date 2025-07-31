import Notification from "../components/main/notification";

function Notifications() {
    return (
        <div className="container">
            <Notification
                title="Your recipe has a new rating"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quisquam, voluptatem ipsum aperiam provident quasi explicabo dicta repudiandae saepe alias totam repellat perspiciatis autem nulla laboriosam quidem assumenda molestias. Repudiandae?"
            />
        </div>
    );
}

export default Notifications;
