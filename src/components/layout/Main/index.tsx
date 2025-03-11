import { IChildrenProps } from '@/utils';

import { MainBlock } from './styled';

export const Main = ({ children }: IChildrenProps) => {
  return <MainBlock>{children}</MainBlock>;
};
