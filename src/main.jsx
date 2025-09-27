import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./scss/style.scss";
import * as bootstrap from "bootstrap";
import "rc-pagination/assets/index.css";

import { RouterProvider } from "react-router";
import router from "./router.js";

import { queryClient } from "./lib/queryClient.js";
import { QueryClientProvider } from "@tanstack/react-query";

import UserProvider from "./providers/userProvider";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <UserProvider>
                <RouterProvider router={router} />
            </UserProvider>
        </QueryClientProvider>
    </StrictMode>
);
