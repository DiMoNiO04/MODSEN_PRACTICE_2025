import { Provider } from 'react-redux';

import { IChildrenProps } from '@/utils';

import { store } from '../store/store';

export const StoreProvider = ({ children }: IChildrenProps) => {
  return <Provider store={store}>{children}</Provider>;
};
