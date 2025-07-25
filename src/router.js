import Auth from "./pages/auth";
import UnAuthenticated from "./layout/UnAuthenticated";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "auth",
        Component: UnAuthenticated,
        children: [{ index: true, Component: Auth }]
    }
]);
export default router;
