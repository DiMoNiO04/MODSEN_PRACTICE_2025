import { IChildrenProps } from '@/utils/interfaces';

import { MainBlock } from './styled';

export const Main = ({ children }: IChildrenProps) => {
  return <MainBlock>{children}</MainBlock>;
};
