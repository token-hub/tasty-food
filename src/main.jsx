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
import ModalProvider from "./providers/modalProvider";
import ToastProvider from "./providers/toastProvider";
import UserProvider from "./providers/userProvider";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <UserProvider>
                <RecipeProvider>
                    <ModalProvider>
                        <ChatProvider>
                            <ToastProvider>
                                <RouterProvider router={router} />
                            </ToastProvider>
                        </ChatProvider>
                    </ModalProvider>
                </RecipeProvider>
            </UserProvider>
        </QueryClientProvider>
    </StrictMode>
);
