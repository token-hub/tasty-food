import Submenu from "../components/main/submenu";
import { useSlideContext } from "../providers/slideProvider";
import { SUBMENU_HEADERS } from "../lib/constants";

function Me() {
    const { handleSlide } = useSlideContext();

    return (
        <div className="d-md-none px-3">
            <Submenu clickHandler={() => handleSlide({ open: true, header: SUBMENU_HEADERS[0] })} text={SUBMENU_HEADERS[0]} />
            <Submenu clickHandler={() => handleSlide({ open: true, header: SUBMENU_HEADERS[1] })} text={SUBMENU_HEADERS[1]} />
        </div>
    );
}

export default Me;
