import { useState } from 'react';

export function usePagination(options) {
    const [pagination, setPagination] = useState({
        page: 1,
        cursor: '',
        limit: 6,
        sortBy: 'updatedAt',
        order: -1,
        skip: 0,
        ...options
    });

    return { pagination, setPagination };
}
