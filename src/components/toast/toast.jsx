import { useState, useEffect, useRef, useCallback } from "react";
import { useToastStore } from "../../stores/useToastStore";
import { Toast as bootstrapToast } from "bootstrap";

function Toast({ toast, delay = 3000 }) {
    const updateToast = useToastStore((state) => state.updateToast);
    const removeToast = useToastStore((state) => state.removeToast);
    const [shouldRender, setShouldRender] = useState(true);
    const { id, headerText, bodyText, shouldClose, isSuccess } = toast;
    const toastRef = useRef();

    const handleClose = useCallback(
        (id) => {
            removeToast(id);
            setShouldRender(false);
        },
        [removeToast]
    );

    useEffect(() => {
        let timer;
        if (toastRef.current) {
            const targetToast = bootstrapToast.getOrCreateInstance(toastRef.current);
            targetToast.show();

            timer = setTimeout(() => {
                handleClose(id);
            }, delay);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [delay, id, handleClose]);

    useEffect(() => {
        let timer;
        if (shouldClose) {
            const targetToast = bootstrapToast.getOrCreateInstance(toastRef.current);
            targetToast.hide();
            timer = setTimeout(() => {
                handleClose(id);
            }, delay);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [shouldClose, delay, handleClose, id]);

    return (
        shouldRender && (
            <div className="toast" ref={toastRef} data-bs-autohide="false" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <strong className={`me-auto ${isSuccess ? "text-success" : "text-danger"}`}>{headerText}</strong>
                    <button type="button" onClick={() => updateToast(id)} className="btn-close" aria-label="Close" />
                </div>
                <div className="toast-body">{bodyText}</div>
            </div>
        )
    );
}

export default Toast;
