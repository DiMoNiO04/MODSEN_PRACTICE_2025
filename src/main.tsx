import './assets/styles/index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ErrorBoundaryProvider, RouterProvider, ThemeProvider } from './providers';
import { StoreProvider } from './providers/storeProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <ErrorBoundaryProvider>
        <ThemeProvider>
          <RouterProvider />
        </ThemeProvider>
      </ErrorBoundaryProvider>
    </StoreProvider>
  </StrictMode>
);
