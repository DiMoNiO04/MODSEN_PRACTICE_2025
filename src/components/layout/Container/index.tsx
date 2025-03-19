import { IChildrenProps } from '@/utils/interfaces';

import { ContainerBlock } from './styled';

export const Container = ({ children }: IChildrenProps) => {
  return <ContainerBlock>{children}</ContainerBlock>;
};
