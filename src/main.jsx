import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './scss/style.scss';
import * as bootstrap from 'bootstrap';
import 'rc-pagination/assets/index.css';

import router from './router.js';

import { queryClient } from './lib/queryClient.js';

// providers
import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </StrictMode>
);
