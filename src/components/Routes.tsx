import { Route, Routes } from 'react-router-dom';

import { UITexts } from '@/constants';

import { ErrorContent } from './blocks';
import { App } from './layout';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="*" element={<ErrorContent text={UITexts.ERRORS.NOT_FOUND} />} />
  </Routes>
);
