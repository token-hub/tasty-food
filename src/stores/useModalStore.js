import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { MODAL_MODES } from "../lib/constants";

const defaultModal = {
    name: "recipe",
    mode: MODAL_MODES[0],
    show: false
};

const store = (set) => ({
    modal: defaultModal,
    setCurrentModal: (name, mode) => {
        set(({ modal }) => ({ modal: { ...modal, name, mode, show: true } }));
    },
    reset: () => set(() => defaultModal)
});

export const useModalStore = create(devtools(store));
