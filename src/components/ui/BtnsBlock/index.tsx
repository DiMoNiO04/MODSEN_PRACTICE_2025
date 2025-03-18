import { IChildrenProps } from '@/utils/interfaces';

import { Btns } from './styled';

export const BtnsBlock = ({ children }: IChildrenProps) => {
  return <Btns>{children}</Btns>;
};
