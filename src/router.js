import Auth from "./pages/auth";
import Recipes from "./pages/recipes";

import AuthLayout from "./layout/authLayout";
import BaseLayout from "./layout/base";
import MyAccountLayout from "./layout/myAccountLayout";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        Component: BaseLayout,
        children: [{ index: true, Component: Recipes }]
    },
    {
        path: "/me",
        Component: MyAccountLayout,
        children: [{ index: true, Component: Recipes }]
    },
    {
        path: "auth",
        Component: AuthLayout,
        children: [{ index: true, Component: Auth }]
    }
]);
export default router;
