import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./scss/style.scss";
import * as bootstrap from "bootstrap";
import "rc-pagination/assets/index.css";

import { RouterProvider } from "react-router";
import router from "./router.js";

import { queryClient } from "./lib/queryClient.js";
import { QueryClientProvider } from "@tanstack/react-query";

import RecipeProvider from "./providers/recipeFilterProvider.jsx";
import ChatProvider from "./providers/chatProvider";
import UserProvider from "./providers/userProvider";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <UserProvider>
                <RecipeProvider>
                    <ChatProvider>
                        <RouterProvider router={router} />
                    </ChatProvider>
                </RecipeProvider>
            </UserProvider>
        </QueryClientProvider>
    </StrictMode>
);
