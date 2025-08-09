import { useEffect } from "react";
import { useSlideContext } from "../../providers/slideProvider";

function MobileSlide({ children }) {
    const { isSlideOpen, handleSlide } = useSlideContext();

    useEffect(() => {
        const slide = document.querySelector(".slide");
        const html = document.querySelector("html");

        if (isSlideOpen) {
            slide.classList.remove("hidden-from-left-to-right");
            slide.classList.add("show-from-right-to-left");
            html.classList.add("overflow-y-hidden");
        } else {
            html.classList.remove("overflow-y-hidden");
            slide.classList.add("hidden-from-left-to-right");
            slide.classList.remove("show-from-right-to-left");
        }
    }, [isSlideOpen]);

    return (
        <div className="slide hidden-from-left-to-right d-md-none">
            <span onClick={() => handleSlide(false)}>{`<--`}</span>
            {children}
        </div>
    );
}

export default MobileSlide;
