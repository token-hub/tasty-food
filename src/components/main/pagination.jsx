import RcPagination from "rc-pagination";
import LeftCaretIcon from "../../assets/icons/leftCaretIcon";
import RightCaretIcon from "../../assets/icons/rightCaretIcon";
import { useState } from "react";

function Pagination({ pageSize = 6, total = 6, currentPage = 1 }) {
    const [makeFirstPageHidden, setMakeFirstPageHidden] = useState(false);
    const [makeLastPageHidden, setMakeLastPageHidden] = useState(true);
    const lastPage = Math.ceil(total / pageSize);
    const firstPage = 1;
    return (
        <div className="d-flex w-100 justify-content-center">
            <RcPagination
                pageSize={pageSize}
                total={total}
                currentPage={currentPage}
                hideOnSinglePage={true}
                className="pagination"
                prevIcon={LeftCaretIcon}
                nextIcon={RightCaretIcon}
                showLessItems
                showPrevNextJumpers={false}
                itemRender={(current, type, element) => {
                    // if the differnce of the current and active element is less than 2 show if, else then hide it
                    if (element?._owner?.pendingProps?.active && current != firstPage) {
                        if (current - firstPage < 3) {
                            setMakeFirstPageHidden(false);
                        } else {
                            setMakeFirstPageHidden(true);
                        }
                    }

                    if (current == firstPage && element.type === "a" && makeFirstPageHidden) {
                        return null;
                    }

                    if (element?._owner?.pendingProps?.active && current != lastPage) {
                        if (lastPage - current < 3) {
                            setMakeLastPageHidden(false);
                        } else {
                            setMakeLastPageHidden(true);
                        }
                    }

                    if (current == lastPage && element.type === "a" && makeLastPageHidden) {
                        return null;
                    }

                    return element;
                }}
            />
        </div>
    );
}

export default Pagination;
