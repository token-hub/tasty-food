import { useState } from "react";

export function usePagination() {
    const [page, setPage] = useState(1);

    function handlePagination(page) {
        setPage(page);
    }

    return { page, handlePagination };
}
