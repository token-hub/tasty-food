import { Outlet } from "react-router";
import CreateRecipeModal from "../components/modals/createNewRecipe/createRecipeModal";
import DefaultMetaData from "../components/header/defaultMetaData";
import MobileSlide from "../components/slides/mobileSlide";
import { useSlideStore } from "../stores/useSlideStore";

function Base() {
    const slides = useSlideStore((state) => state.slides);
    return (
        <>
            <DefaultMetaData />
            <div className="position-fixed vh-100 z-3">
                {slides.length > 0 &&
                    slides.map(({ header, component }, index) => (
                        <MobileSlide index={index} key={header}>
                            {component}
                        </MobileSlide>
                    ))}
            </div>
            <Outlet />
            <CreateRecipeModal />
        </>
    );
}

export default Base;
