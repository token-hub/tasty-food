import { createBrowserRouter } from 'react-router';

const publicRoutes = {
    path: '/',
    lazy: {
        Component: async () => (await import('./layout/public')).default,
        ErrorBoundary: async () => (await import('./pages/ErrorBoundary')).default
    },
    children: [
        {
            index: true,
            lazy: {
                Component: async () => (await import('./pages/recipes')).default
            }
        },
        {
            path: ':author',
            children: [
                {
                    path: 'recipes',
                    children: [
                        {
                            index: true,
                            lazy: {
                                Component: async () => (await import('./pages/recipes')).default
                            }
                        },
                        {
                            path: ':recipeId',
                            lazy: {
                                Component: async () => (await import('./pages/recipe')).default
                            },
                            children: [
                                {
                                    path: 'createRecipeRating',
                                    lazy: {
                                        action: async () => (await import('./actions/createRecipeRating')).default
                                    }
                                },
                                {
                                    path: 'createConversation',
                                    lazy: {
                                        action: async () => (await import('./actions/createConversation')).default
                                    }
                                },
                                {
                                    path: 'createMessage',
                                    lazy: {
                                        action: async () => (await import('./actions/createMessage')).default
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

const unauthenticationRoutes = {
    path: '/auth',
    lazy: {
        Component: async () => (await import('./layout/signUpLogin')).default
    },
    children: [
        {
            index: true,
            lazy: {
                Component: async () => (await import('./pages/auth/auth')).default,
                action: async () => (await import('./actions/auth')).default
            }
        },
        {
            path: 'forgot-password',
            lazy: {
                Component: async () => (await import('./pages/auth/forgotPassword')).default,
                action: async () => (await import('./actions/forgotPassword')).default
            }
        },
        {
            path: 'reset-password',
            lazy: {
                Component: async () => (await import('./pages/auth/resetPassword')).default,
                action: async () => (await import('./actions/resetPassword')).default
            }
        },
        {
            path: 'email-verified',
            lazy: {
                Component: async () => (await import('./pages/auth/emailVerified')).default
            }
        }
    ]
};

const authenticatedRoutes = {
    path: '/me',
    lazy: {
        Component: async () => (await import('./layout/auth')).default,
        errorElement: async () => (await import('./pages/notFound')).default
    },
    children: [
        {
            index: true,
            lazy: {
                Component: async () => (await import('./pages/me')).default
            }
        },
        {
            path: 'profile',
            lazy: {
                Component: async () => (await import('./pages/profile')).default,
                action: async () => (await import('./actions/updateUser')).default
            }
        },
        {
            path: 'recipes',
            children: [
                {
                    index: true,
                    lazy: {
                        Component: async () => (await import('./pages/recipes')).default
                    }
                },
                {
                    path: 'create',
                    lazy: {
                        action: async () => (await import('./actions/createRecipe')).default
                    }
                },
                {
                    path: ':recipeId',
                    lazy: {
                        Component: async () => (await import('./pages/recipe')).default
                    }
                }
            ]
        },
        {
            path: 'archives',
            lazy: {
                Component: async () => (await import('./pages/archives')).default
            }
        },
        {
            path: 'password',
            lazy: {
                Component: async () => (await import('./pages/password')).default,
                action: async () => (await import('./actions/updatePassword')).default
            }
        },
        {
            path: 'notifications',
            lazy: {
                Component: async () => (await import('./pages/notifications')).default
            },
            children: [
                {
                    path: 'markUnreadNotifications',
                    lazy: {
                        action: async () => (await import('./actions/markUnreadNotificationsAction')).default
                    }
                },
                {
                    path: 'markAsReadNotification',
                    lazy: {
                        action: async () => (await import('./actions/markAsReadNotificationAction')).default
                    }
                }
            ]
        }
    ]
};

const baseRoutes = {
    lazy: {
        Component: async () => (await import('./layout/base')).default
    },
    children: [publicRoutes, authenticatedRoutes, unauthenticationRoutes]
};

const chatRoutes = {
    path: '/chat',
    children: [
        {
            path: 'getMoreMessages',
            lazy: {
                action: async () => (await import('./actions/getMoreMessagesAction')).default
            }
        },
        {
            path: 'markUnreadMessages',
            lazy: {
                action: async () => (await import('./actions/markUnreadMessagesAction')).default
            }
        }
    ]
};

const signOutRoute = {
    path: '/signOut',
    lazy: {
        action: async () => (await import('./actions/signOut')).default
    }
};

const emailVerificationRoute = {
    path: '/emailVerification',
    lazy: {
        action: async () => (await import('./actions/emailVerification')).default
    }
};

const notFoundRoute = {
    path: '*',
    lazy: {
        Component: async () => (await import('./pages/notFound')).default
    }
};

const router = createBrowserRouter([baseRoutes, chatRoutes, signOutRoute, emailVerificationRoute, notFoundRoute]);
export default router;
