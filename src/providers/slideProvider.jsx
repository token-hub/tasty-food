import { createContext, useContext, useState } from "react";
import MobileSlide from "../components/slides/mobileSlide";

export const slide = {
    open: false,
    header: "",
    component: ""
};

const SlideContext = createContext({
    slides: [],
    openSlide: () => {},
    closeSlide: () => {}
});

export function useSlideContext() {
    return useContext(SlideContext);
}

function SlideProvider({ children }) {
    const [slides, setSlides] = useState([]);

    function openSlide(data) {
        if (!data) return;
        setSlides((slides) => [...slides, data]);
    }

    function closeSlide() {
        // to start the closing animation
        const targetIndex = slides.length - 1;

        setSlides((slides) => {
            return slides.map((slide, index) => {
                if (index === targetIndex) {
                    return { ...slide, open: false };
                } else {
                    return slide;
                }
            });
        });

        // wrap with setTimeout to let the animation finished first before unmounting the component
        setTimeout(() => {
            setSlides((slides) => slides.filter((slide, index) => index != slides.length - 1));
        }, 400);
    }

    const values = {
        slides,
        openSlide,
        closeSlide
    };

    return (
        <SlideContext value={values}>
            {slides.length > 0 &&
                slides.map(({ header, component }, index) => (
                    <MobileSlide index={index} key={header}>
                        {component}
                    </MobileSlide>
                ))}
            {children}
        </SlideContext>
    );
}

export default SlideProvider;
