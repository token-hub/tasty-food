import UserIcon from "../../../assets/icons/userIcon";
function ChatConvo() {
    return (
        <div className="d-flex align-items-center p-2" role="button">
            <div className="border rounded-circle">
                <UserIcon height="28" width="28" />
            </div>
            <div className="fs-7 px-2 py-1">
                <p className="m-0 d-flex align-items-center">
                    <span className="fw-bold me-auto">John Doe</span>
                    <span className="small">26/01</span>
                </p>
                <p className="m-0">
                    <span className="text-muted small me-2">Very importa...</span>
                    <span className="convo-count small bg-secondary text-white  rounded-circle">10</span>
                </p>
            </div>
        </div>
    );
}

export default ChatConvo;
