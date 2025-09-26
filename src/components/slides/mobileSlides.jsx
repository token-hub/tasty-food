import { useSlideStore } from "../../stores/useSlideStore";
import MobileSlide from "./mobileSlide";

function MobileSlides() {
    const slides = useSlideStore((state) => state.slides);
    return (
        <div className="position-fixed vh-100 z-3">
            {slides.length > 0 &&
                slides.map(({ header, component }, index) => (
                    <MobileSlide index={index} key={header}>
                        {component}
                    </MobileSlide>
                ))}
        </div>
    );
}

export default MobileSlides;
