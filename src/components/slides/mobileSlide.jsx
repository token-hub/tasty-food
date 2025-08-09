import { useEffect } from "react";
import { useSlideContext } from "../../providers/slideProvider";
import LeftIcon from "../../assets/icons/leftIcon";
import ChatDotsIcon from "../../assets/icons/ChatDotsIcon";
import Profile from "../../pages/profile";

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
            <div className="d-flex align-items-center justify-content-between p-3 shadow-sm">
                <button className="btn p-0" onClick={() => handleSlide(false)}>
                    <LeftIcon className="text-secondary" height="26" width="26" />
                </button>
                <h5 className="m-0">Profile</h5>
                <ChatDotsIcon className="text-secondary" height="22" width="22" />
            </div>
            <Profile />
            {children}
        </div>
    );
}

export default MobileSlide;
