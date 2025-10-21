import { createContext, useContext, useState } from 'react';
import { MODAL_MODES } from '../lib/constants';

const ModalContext = createContext({
    modal: { name: '', mode: '', show: false },
    setCurrentModal: () => {},
    reset: () => {}
});

export function useModalContext() {
    return useContext(ModalContext);
}

function ModalProvider({ children }) {
    const [modal, setModal] = useState({
        name: 'recipe',
        mode: MODAL_MODES[0],
        show: false
    });

    function setCurrentModal(name, mode) {
        setModal({ ...modal, name, mode, show: true });
    }

    function reset() {
        setModal({
            name: 'recipe',
            mode: MODAL_MODES[0],
            show: false
        });
    }

    const values = {
        modal,
        setCurrentModal,
        reset
    };

    return <ModalContext value={values}>{children}</ModalContext>;
}

export default ModalProvider;
