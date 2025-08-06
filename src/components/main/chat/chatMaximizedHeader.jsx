import DownArrowIcon from "../../../assets/icons/downArrowIcon";
function ChatMaximizedHeader({ chatCount }) {
    return (
        <>
            <div className="mb-2">
                <div className="d-flex">
                    <h6 className="text-secondary py-2 px-3 m-0 fw-bold flex-grow-1">
                        Chat <span className="fs-7">( {chatCount} )</span>
                    </h6>
                    <button className="btn text-muted">
                        <DownArrowIcon height="15" width="15" />
                    </button>
                </div>
                <hr className="m-0" />
            </div>
        </>
    );
}

export default ChatMaximizedHeader;
