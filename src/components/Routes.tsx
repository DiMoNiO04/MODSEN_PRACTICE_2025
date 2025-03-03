import { Route, Routes } from 'react-router-dom';

import { App } from './layout';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="*" element={<div>404 - Not Found</div>} />
  </Routes>
);
