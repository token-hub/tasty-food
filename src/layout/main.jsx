import { useLocation } from "react-router";
import MainHeader from "../components/main/mainHeader";
import { getMainHeaderText } from "../lib/utilities";

function Main({ children }) {
    let { pathname } = useLocation();
    let currentHeader = getMainHeaderText(pathname);

    return (
        <main>
            <MainHeader text={currentHeader} />
            {children}
        </main>
    );
}

export default Main;
