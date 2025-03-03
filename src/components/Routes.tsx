import { Route, Routes } from 'react-router-dom';

import { NotFound } from './blocks';
import { App } from './layout';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
