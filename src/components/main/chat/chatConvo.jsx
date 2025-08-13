import UserIcon from "../../../assets/icons/userIcon";
import { getDayAndMonthFromDate, trimTextAddEllipsis, capitalizeFirstLetter } from "../../../lib/utilities";
import { useSlideContext } from "../../../providers/slideProvider";

function chatConvoContent(mobileView, trimName, trimText, convoDate, convoCount) {
    return (
        <>
            <div className={`border rounded-circle ${mobileView ? "me-2" : ""}`}>
                <UserIcon height="28" width="28" />
            </div>
            <div className="fs-7 px-2 py-1 w-100 w-sm-0 border-bottom">
                <p className="m-0 d-flex align-items-center">
                    <span className="fw-bold me-auto text-capitalize">{trimName}</span>
                    <span className="small">{convoDate}</span>
                </p>
                <p className="m-0">
                    <span className="text-muted small me-2">{trimText}</span>
                    {convoCount > 0 && (
                        <span
                            className="convo-count small bg-secondary text-white  rounded-circle d-inline-block text-center"
                            style={{ width: "15px" }}
                        >
                            {convoCount}
                        </span>
                    )}
                </p>
            </div>
        </>
    );
}

function ChatConvo({ name, date, text, convoCount = 0, mobileView = false }) {
    let trimNameLength = mobileView ? 27 : 8;
    let trimTextLength = mobileView ? 35 : 13;
    const convoDate = getDayAndMonthFromDate(date);
    let trimName = trimTextAddEllipsis(name, trimNameLength);
    let trimText = trimTextAddEllipsis(text, trimTextLength);
    trimText = capitalizeFirstLetter(trimText);
    let toPass = [mobileView, trimName, trimText, convoDate, convoCount];

    const { openSlide } = useSlideContext();

    return (
        <>
            {/* Add open slide click event on small screen */}
            <div
                className="d-flex align-items-center p-2 d-block d-sm-none"
                onClick={() =>
                    openSlide({
                        open: true,
                        header: trimName
                    })
                }
                role="button"
            >
                {chatConvoContent(...toPass)}
            </div>
            {/* Add change convo click event on large screen */}
            <div className="d-flex align-items-center p-2 d-none d-sm-block" role="button">
                {chatConvoContent(...toPass)}
            </div>
        </>
    );
}

export default ChatConvo;
