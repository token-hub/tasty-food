import Submenu from "../components/main/submenu";
import { useSlideContext } from "../providers/slideProvider";
import { SUBMENU_HEADERS } from "../lib/constants";
import Profile from "../pages/profile";
import Password from "../pages/password";

function Me() {
    const { openSlide } = useSlideContext();

    return (
        <div className="d-md-none px-3">
            <Submenu clickHandler={() => openSlide({ open: true, header: SUBMENU_HEADERS[0], component: <Profile /> })} text={SUBMENU_HEADERS[0]} />
            <Submenu clickHandler={() => openSlide({ open: true, header: SUBMENU_HEADERS[1], component: <Password /> })} text={SUBMENU_HEADERS[1]} />
        </div>
    );
}

export default Me;
