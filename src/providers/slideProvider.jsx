import { createContext, useContext, useState } from "react";

const SlideContext = createContext({
    slide: {
        open: false,
        header: ""
    },
    handleSlide: () => {}
});

export function useSlideContext() {
    return useContext(SlideContext);
}

function SlideProvider({ children }) {
    const [slide, setSlide] = useState({
        open: false,
        header: ""
    });

    function handleSlide(data) {
        setSlide((slide) => ({
            ...slide,
            ...data
        }));
    }

    const values = {
        slide,
        handleSlide
    };

    return <SlideContext value={values}>{children}</SlideContext>;
}

export default SlideProvider;
