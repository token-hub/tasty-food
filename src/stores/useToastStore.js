import { create } from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
    toasts: [],
    updateToast: (id) =>
        set(({ toasts }) => ({
            toasts: toasts.map((toast) => {
                if (toast.id === id) {
                    return { ...toast, shouldClose: true };
                } else {
                    return toast;
                }
            })
        })),
    removeToast: (id) => set(({ toasts }) => ({ toasts: toasts.filter((toast) => toast.id !== id) })),
    createToast: ({ headerText, bodyText, isSuccess = true }) =>
        set(({ toasts }) => {
            const isExist = toasts.some((toast) => toast.headerText === headerText && toast.bodyText);

            if (!isExist) {
                return {
                    toasts: [
                        ...toasts,
                        {
                            id: toasts.length,
                            headerText,
                            bodyText,
                            isSuccess
                        }
                    ]
                };
            }

            return { toasts };
        })
});

export const useToastStore = create(devtools(store));
