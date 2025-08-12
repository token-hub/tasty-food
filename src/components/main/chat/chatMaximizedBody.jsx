import ConvoDate from "./convoDate";
import ConvoMessage from "./convoMessage";
import ChatArea from "./chatArea";

function ChatMaximizedBody({ convoWith, mobileView = false }) {
    return (
        <div className={`mt-2 ${mobileView ? "h-90" : "h-100"} position-relative`}>
            {!mobileView && (
                <>
                    <p className="fs-7 m-0 mb-1 fw-bold px-3">{convoWith}</p>
                    <hr className="m-0" />
                </>
            )}

            <div className="h-100 p-3 overflow-auto">
                <div className="d-flex flex-column mb-6">
                    <ConvoDate date={"2020/07/26"} />
                    <ConvoMessage
                        date={new Date()}
                        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolor! Est fugiat incidunt enim dolore quisquam
                            explicabo recusandae delectus consequatur voluptatem et laudantium reprehenderit corrupti aut sapiente deserunt, quo a."
                    />
                    <ConvoMessage date={new Date()} isUser={true} message="Hello Author!" />
                </div>
            </div>
            <ChatArea />
        </div>
    );
}

export default ChatMaximizedBody;
