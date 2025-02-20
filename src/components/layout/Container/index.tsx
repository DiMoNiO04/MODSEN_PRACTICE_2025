import { IChildrenProps } from '@/utils';
import { ContainerBlock } from './styled';

export const Container = ({ children }: IChildrenProps) => {
  return <ContainerBlock>{children}</ContainerBlock>;
};
