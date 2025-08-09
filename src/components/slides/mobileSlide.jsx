import { useEffect } from "react";
import { useSlideContext } from "../../providers/slideProvider";
import LeftIcon from "../../assets/icons/leftIcon";
import ChatDotsIcon from "../../assets/icons/ChatDotsIcon";
import Profile from "../../pages/password";

function MobileSlide({ children }) {
    const { slide, handleSlide } = useSlideContext();
    const isSlideOpen = slide.open;

    useEffect(() => {
        const slideElem = document.querySelector(".slide");
        const html = document.querySelector("html");

        if (isSlideOpen) {
            slideElem.classList.remove("hidden-from-left-to-right");
            slideElem.classList.add("show-from-right-to-left");
            html.classList.add("overflow-y-hidden");
        } else {
            html.classList.remove("overflow-y-hidden");
            slideElem.classList.add("hidden-from-left-to-right");
            slideElem.classList.remove("show-from-right-to-left");
        }
    }, [isSlideOpen]);

    return (
        <div className="slide hidden-from-left-to-right d-md-none">
            <div className="d-flex align-items-center justify-content-between p-3 shadow-sm">
                <button className="btn p-0" onClick={() => handleSlide({ open: false })}>
                    <LeftIcon className="text-secondary" height="26" width="26" />
                </button>
                <h5 className="m-0 text-capitalize">{slide.header}</h5>
                <ChatDotsIcon className="text-secondary" height="22" width="22" />
            </div>
            <Profile />
            {children}
        </div>
    );
}

export default MobileSlide;
