import { create } from "zustand";

export const slide = {
    open: false,
    header: "",
    component: ""
};

export const useSlideStore = create((set) => ({
    slides: [],
    openSlide: (data) => {
        if (!data) return;
        set(({ slides }) => ({
            slides: [...slides, data]
        }));
    },
    closeSlide: () => {
        set(({ slides }) => {
            const targetIndex = slides.length - 1;

            const newSlides = slides.map((slide, index) => {
                if (index === targetIndex) {
                    return { ...slide, open: false };
                } else {
                    return slide;
                }
            });

            return { slides: newSlides };
        });

        // wrap with setTimeout to let the animation finished first before unmounting the component
        setTimeout(() => {
            set(({ slides }) => ({ slides: slides.filter((slide, index) => index != slides.length - 1) }));
        }, 400);
    }
}));
