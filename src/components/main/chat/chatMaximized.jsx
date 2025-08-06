import ChatConvo from "./ChatConvo";
import ChatMaximizedHeader from "./chatMaximizedHeader";
import ChatMaximizedBody from "./chatMaximizedBody";

function ChatMaximized({ chatCount }) {
    let hasSelectedConvo = true;

    return (
        <div className="chat-maximized position-fixed bottom-0 end-0 bg-light rounded-top shadow">
            <ChatMaximizedHeader chatCount={chatCount} />
            <div className="chat-body">
                <div className="row h-100">
                    <div className="col-4 h-100 border-end pe-0 overflow-auto">
                        <ChatConvo name="john doe doe doe" date="2022/11/17" text="very important message" convoCount={5} />
                    </div>
                    <div className="col-8 h-100 ps-0 ">
                        {!hasSelectedConvo && (
                            <div className="h-100 d-flex flex-column align-items-center justify-content-center bg-gray">
                                <h6 className="fw-bold">Welcome to Recipe Chat</h6>
                                <h6 className="text-muted">Start a conversations</h6>
                            </div>
                        )}
                        <ChatMaximizedBody convoWith={"John Doe"} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatMaximized;
