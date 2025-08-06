import { getDayAndMonthFromDate } from "../../../lib/utilities";
function ConvoDate({ date }) {
    const convoDate = getDayAndMonthFromDate(date);
    return <span className="convo-date mx-auto my-3 bg-gray p-2 text-center rounded-4">{convoDate}</span>;
}

export default ConvoDate;
