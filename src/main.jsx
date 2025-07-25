import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./scss/style.scss";
import * as bootstrap from "bootstrap";

import { RouterProvider } from "react-router";
import router from "./router.js";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
