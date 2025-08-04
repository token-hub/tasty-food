import { PATHS } from "./constants";

export function getMainHeaderText(pathname) {
    let currentHeader = "";

    if (pathname.includes(PATHS.password.name)) {
        currentHeader = PATHS.password.toDisplay;
    } else if (pathname.includes(PATHS.profile.name)) {
        currentHeader = PATHS.profile.toDisplay;
    } else if (pathname.includes(PATHS.myRecipes.name)) {
        currentHeader = PATHS.myRecipes.toDisplay;
    } else if (pathname.includes(PATHS.archives.name)) {
        currentHeader = PATHS.archives.toDisplay;
    }

    return currentHeader;
}
