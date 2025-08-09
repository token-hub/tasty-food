import { createContext, useContext, useState } from "react";

const SlideContext = createContext({
    isSlideOpen: false,
    handleSlide: () => {}
});

export function useSlideContext() {
    return useContext(SlideContext);
}

function SlideProvider({ children }) {
    const [isSlideOpen, setIsSlideOpen] = useState(false);

    function handleSlide(isOpen) {
        setIsSlideOpen(isOpen);
    }

    const values = {
        isSlideOpen,
        handleSlide
    };

    return <SlideContext value={values}>{children}</SlideContext>;
}

export default SlideProvider;
