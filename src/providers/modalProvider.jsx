import { createContext, useContext, useState } from "react";
import { MODAL_MODES } from "../lib/constants";

const ModalContext = createContext({});

export function useModalContext() {
    return useContext(ModalContext);
}

function ModalProvider({ children }) {
    const [modal, setModal] = useState({
        name: "recipe",
        mode: MODAL_MODES[0]
    });

    function setCurrentModal(name, mode) {
        setModal({ ...modal, name, mode });
    }

    const values = {
        modal,
        setCurrentModal
    };

    return <ModalContext value={values}>{children}</ModalContext>;
}

export default ModalProvider;
