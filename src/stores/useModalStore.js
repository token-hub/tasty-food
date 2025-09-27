import { create } from "zustand";
import { MODAL_MODES } from "../lib/constants";

const defaultModal = {
    name: "recipe",
    mode: MODAL_MODES[0],
    show: false
};

export const useModalStore = create((set) => ({
    modal: defaultModal,
    setCurrentModal: (name, mode) => {
        set(({ modal }) => ({ modal: { ...modal, name, mode, show: true } }));
    },
    reset: () => set(() => defaultModal)
}));
