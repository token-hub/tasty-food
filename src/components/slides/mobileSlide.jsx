import { useEffect } from "react";
import LeftIcon from "../../assets/icons/leftIcon";
import ChatDotsIcon from "../../assets/icons/chatDotsIcon";
import { useSlideStore } from "../../stores/useSlideStore";

function MobileSlide({ index, children }) {
    const slides = useSlideStore((state) => state.slides);
    const closeSlide = useSlideStore((state) => state.closeSlide);

    const currentSlide = slides[index];
    const isSlideOpen = currentSlide?.open;

    useEffect(() => {
        const slideElem = document.querySelector(`.slide-${index + 1}`);
        const html = document.querySelector("html");
        const body = document.querySelector("body");

        // need to wrap with setTimeout because the component is
        // being mounted as the slide is being added in the state,
        // without wrapping, there will be no animation
        let timer = setTimeout(() => {
            if (isSlideOpen) {
                slideElem.classList.remove("hidden-from-left-to-right");
                slideElem.classList.add("show-from-right-to-left");
                html.classList.add("overflow-y-hidden");
                body.classList.add("overflow-y-hidden");
            } else {
                html.classList.remove("overflow-y-hidden");
                body.classList.remove("overflow-y-hidden");
                slideElem.classList.add("hidden-from-left-to-right");
                slideElem.classList.remove("show-from-right-to-left");
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        };
    }, [isSlideOpen, index]);

    return (
        <div className={`slide slide-${index + 1} hidden-from-left-to-right d-md-none`}>
            <div className="d-flex align-items-center justify-content-between p-3 shadow-sm">
                <button className="btn p-0" onClick={closeSlide}>
                    <LeftIcon className="text-secondary" height="26" width="26" />
                </button>
                <h5 className="m-0 text-capitalize">{currentSlide.header}</h5>
                <ChatDotsIcon className="text-secondary invisible" height="22" width="22" />
            </div>
            {children}
        </div>
    );
}

export default MobileSlide;
