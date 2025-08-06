import ChatDotsIcon from "../../../assets/icons/ChatDotsIcon";
import DownArrowIcon from "../../../assets/icons/downArrowIcon";

import ChatConvo from "./ChatConvo";

function Chat({ chatCount = 0 }) {
    let hasSelectedConvo = false;

    return (
        <>
            {/* minimized */}
            <div className="position-fixed bottom-0 end-0 me-3 bg-primary py-2 px-3 rounded-top text-white position-relative" role="button">
                <ChatDotsIcon />
                <span className="ms-2">Chat</span>
                {chatCount > 0 && (
                    <span
                        className="fs-7 border border-light position-absolute top-0 bg-secondary  rounded-circle p-1 mt-n3 ms-n2 text-center"
                        style={{ width: "30px" }}
                    >
                        99
                    </span>
                )}
            </div>

            {/* maximized */}
            <div className="chat-maximized position-fixed bottom-0 end-0 bg-light rounded-top shadow">
                <div className="mb-2">
                    <div className="d-flex">
                        <h6 className="text-secondary py-2 px-3 m-0 fw-bold flex-grow-1">
                            Chat <span className="fs-7">( 99 )</span>{" "}
                        </h6>
                        <button className="btn text-muted">
                            <DownArrowIcon height="15" width="15" />
                        </button>
                    </div>
                    <hr className="m-0" />
                </div>
                <div className="chat-body">
                    <div className="row h-100">
                        <div className="col-4 h-100 border-end pe-0 overflow-auto">
                            <ChatConvo />
                        </div>
                        <div className="col-8 h-100 ps-0">
                            {!hasSelectedConvo && (
                                <div className="h-100 d-flex flex-column align-items-center justify-content-center bg-gray">
                                    <h6 className="fw-bold">Welcome to Recipe Chat</h6>
                                    <h6 className="text-muted">Start a conversations</h6>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Chat;
