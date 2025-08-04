import { useLocation } from "react-router";
import MainHeader from "../components/main/mainHeader";
import { getMainHeaderText } from "../lib/utilities";
import { PATHS } from "../lib/constants";

function Main({ children }) {
    let { pathname } = useLocation();
    let currentHeader = getMainHeaderText(pathname);
    let button;

    if (pathname.includes(PATHS.myRecipes.name)) {
        button = (
            <button className="btn btn-primary text-white mb-3" data-bs-toggle="modal" data-bs-target="#createRecipe">
                Add
            </button>
        );
    }

    return (
        <main className="py-3 mb-6 px-md-4 bg-light">
            <MainHeader text={currentHeader} button={button} />
            {children}
        </main>
    );
}

export default Main;
