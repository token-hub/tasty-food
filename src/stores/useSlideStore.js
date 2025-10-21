import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const slide = {
    open: false,
    header: '',
    component: ''
};
const store = (set) => ({
    slides: [],
    openSlide: (data) => {
        if (!data) return;
        set(({ slides }) => ({
            slides: [...slides, data]
        }));
    },
    updateSlide: (index, slide) =>
        set(({ slides }) => {
            slides[index] = slide;
            return { slides: [...slides] };
        }),
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
});

export const useSlideStore = create(devtools(store));
