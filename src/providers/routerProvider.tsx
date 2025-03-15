import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import { UITexts } from '@/constants';

import { ErrorContent } from '../components/blocks';
import { App } from '../components/layout';

export const RouterProvider = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<ErrorContent text={UITexts.ERRORS.NOT_FOUND} />} />
    </Routes>
  </BrowserRouter>
);
