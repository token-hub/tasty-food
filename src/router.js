import Auth from "./pages/auth";
import Recipes from "./pages/recipes";

import AuthLayout from "./layout/authLayout";
import BaseLayout from "./layout/base";
import MyAccountLayout from "./layout/myAccountLayout";
import { createBrowserRouter } from "react-router";
import Profile from "./pages/profile";
import Password from "./pages/password";
import Me from "./pages/me";
import MyRecipes from "./pages/myRecipes";
import Archives from "./pages/archives";
import Notifications from "./pages/notifications";

const router = createBrowserRouter([
    {
        path: "/",
        Component: BaseLayout,
        children: [{ index: true, Component: Recipes }]
    },
    {
        path: "/me",
        Component: MyAccountLayout,
        children: [
            { index: true, Component: Me },
            {
                path: "profile",
                Component: Profile
            },
            {
                path: "myRecipes",
                Component: MyRecipes
            },
            {
                path: "archives",
                Component: Archives
            },
            {
                path: "password",
                Component: Password
            },
            {
                path: "notifications",
                Component: Notifications
            }
        ]
    },
    {
        path: "auth",
        Component: AuthLayout,
        children: [{ index: true, Component: Auth }]
    }
]);
export default router;
