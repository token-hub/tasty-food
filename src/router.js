import AuthPage from "./pages/auth/auth";
import SignUpLogin from "./layout/signUpLogin";
import BaseLayout from "./layout/base";
import AuthLayout from "./layout/auth";
import { createBrowserRouter } from "react-router";
import Profile from "./pages/profile";
import Password from "./pages/password";
import Me from "./pages/me";
import Recipes from "./pages/recipes";
import Archives from "./pages/archives";
import Notifications from "./pages/notifications";
import Recipe from "./pages/recipe";
import Public from "./layout/public";
import NotFound from "./pages/notFound";
import ForgotPassword from "./pages/auth/forgotPassword";
import ResetPassword from "./pages/auth/resetPassword";
import EmailVerified from "./pages/auth/emailVerified";

// actions
import { authAction } from "./actions/auth";
import { signOutAction } from "./actions/signOut";
import { emailVerificationAction } from "./actions/emailVerification";
import { forgotPasswordAction } from "./actions/forgotPassword";
import { resetPasswordAction } from "./actions/resetPassword";
import { updatePasswordAction } from "./actions/updatePassword";
import { updateUserAction } from "./actions/updateUser";
import { createRecipeAction } from "./actions/createRecipe";
import { createRecipeRatingAction } from "./actions/createRecipeRating";
// loaders
import { recipeLoader } from "./loaders/recipeLoader";

const router = createBrowserRouter([
    {
        Component: BaseLayout,
        children: [
            {
                path: "/",
                Component: Public,
                children: [
                    { index: true, Component: Recipes, loader: recipeLoader },
                    {
                        path: ":author",
                        children: [
                            {
                                path: "recipes",
                                children: [
                                    { index: true, Component: Recipes },
                                    { path: ":recipeId", Component: Recipe, action: createRecipeRatingAction }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                path: "/me",
                Component: AuthLayout,
                children: [
                    { index: true, Component: Me },
                    {
                        path: "profile",
                        Component: Profile,
                        action: updateUserAction
                    },
                    {
                        path: "recipes",
                        children: [
                            { index: true, Component: Recipes },
                            { path: "create", action: createRecipeAction },
                            { path: ":recipeId", Component: Recipe }
                        ]
                    },
                    {
                        path: "archives",
                        Component: Archives
                    },
                    {
                        path: "password",
                        Component: Password,
                        action: updatePasswordAction
                    },
                    {
                        path: "notifications",
                        Component: Notifications
                    }
                ],
                errorElement: NotFound
            },
            {
                path: "/auth",
                Component: SignUpLogin,
                children: [
                    { index: true, Component: AuthPage, action: authAction },
                    {
                        path: "forgot-password",
                        Component: ForgotPassword,
                        action: forgotPasswordAction
                    },
                    {
                        path: "reset-password",
                        Component: ResetPassword,
                        action: resetPasswordAction
                    },
                    {
                        path: "email-verified",
                        Component: EmailVerified
                    }
                ]
            }
        ]
    },
    {
        path: "/createRecipe",
        action: createRecipeAction
    },
    {
        path: "/signOut",
        action: signOutAction
    },
    {
        path: "/emailVerification",
        action: emailVerificationAction
    },
    {
        path: "*",
        Component: NotFound
    }
]);
export default router;
