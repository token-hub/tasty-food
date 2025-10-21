import { createContext, useContext, useState, useCallback, useMemo } from 'react';
import Toast from '../components/toast/toast';

const ToastContext = createContext({
    updateToast: () => {},
    removeToast: () => {},
    createToast: () => {}
});

export function useToastContext() {
    return useContext(ToastContext);
}

function ToastProvider(data) {
    const [toasts, setToasts] = useState([]);

    const updateToast = useCallback((id) => {
        setToasts((toasts) => {
            return toasts.map((toast) => {
                if (toast.id === id) {
                    return { ...toast, shouldClose: true };
                } else {
                    return toast;
                }
            });
        });
    }, []);

    const removeToast = useCallback((id) => {
        setToasts((toasts) => {
            return toasts.filter((toast) => toast.id !== id);
        });
    }, []);

    const createToast = useCallback(
        ({ headerText, bodyText, isSuccess = true }) => {
            const isExist = toasts.some((toast) => toast.headerText === headerText && toast.bodyText);

            if (!isExist) {
                setToasts((toasts) => {
                    return [
                        ...toasts,
                        {
                            id: toasts.length,
                            headerText,
                            bodyText,
                            isSuccess
                        }
                    ];
                });
            }
        },
        [toasts]
    );

    const values = useMemo(
        () => ({
            updateToast,
            removeToast,
            createToast
        }),
        []
    );

    return (
        <ToastContext value={values}>
            <>
                <div aria-live="polite" aria-atomic="true" className="position-fixed w-100 z-3">
                    <div className="toast-container top-0 end-0 mt-4 me-md-3">
                        {toasts.length > 0 &&
                            toasts.map((toast) => {
                                return <Toast key={toast.id} toast={toast} />;
                            })}
                    </div>
                </div>
                {data?.children}
            </>
        </ToastContext>
    );
}

export default ToastProvider;
