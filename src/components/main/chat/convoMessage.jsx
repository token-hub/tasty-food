import { capitalizeFirstLetter, getTimeFromDate } from "../../../lib/utilities";

function ConvoMessage({ message, isUser = false, date }) {
    const transMessage = capitalizeFirstLetter(message);
    const time = getTimeFromDate(date);

    let classes = isUser ? "ms-auto bg-primary-light" : "bg-gray";

    return (
        <p className={`convo-message p-2 rounded-3 ${classes}`}>
            <span>{transMessage}</span>
            <span className="d-block text-start time text-muted">{time}</span>
        </p>
    );
}

export default ConvoMessage;
