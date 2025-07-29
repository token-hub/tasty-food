import RcPagination from "rc-pagination";
import LeftCaretIcon from "../../assets/icons/leftCaretIcon";
import RightCaretIcon from "../../assets/icons/rightCaretIcon";

function Pagination({ pageSize = 6, total = 6, currentPage = 1 }) {
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
            />
        </div>
    );
}

export default Pagination;
