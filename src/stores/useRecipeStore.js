import { create } from "zustand";

export const useRecipeStore = create((set) => ({
    filters: [],
    query: "",
    setQuery: (query) => set(() => ({ query })),
    handleFilters: (filter) =>
        set(({ filters }) => {
            let newfilters = [...filters];
            const isExist = filters.some((p) => p == filter);

            if (isExist) {
                newfilters = newfilters.filter((f) => f != filter);
            } else {
                newfilters.push(filter);
            }

            return { filters: newfilters };
        })
}));
