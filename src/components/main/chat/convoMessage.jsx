import { capitalizeFirstLetter, getFormattedDate } from "../../../lib/utilities";

function ConvoMessage({ message, isUser = false, date }) {
    const transMessage = capitalizeFirstLetter(message);
    const formattedDate = getFormattedDate(date);

    let classes = isUser ? "ms-auto bg-primary-light" : "me-auto bg-gray";

    return (
        <p className={`convo-message p-3 rounded-3 ${classes}`}>
            <span>{transMessage}</span>
            <span className="d-block text-start time text-muted">{formattedDate}</span>
        </p>
    );
}

export default ConvoMessage;
