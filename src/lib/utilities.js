export function getMainHeaderText(pathname) {
    let currentHeader = "";

    if (pathname.includes("password")) {
        currentHeader = "Password";
    } else if (pathname.includes("profile")) {
        currentHeader = "Profile";
    } else if (pathname.includes("myRecipes")) {
        currentHeader = "My Recipes";
    }

    return currentHeader;
}
