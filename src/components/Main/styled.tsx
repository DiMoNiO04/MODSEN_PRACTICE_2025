import { IChildrenProps } from '@/utils';
import styled from 'styled-components';

const Block = styled.main`
  margin-top: 100px;
`;

export const Main = ({ children }: IChildrenProps) => {
  return <Block>{children}</Block>;
};
