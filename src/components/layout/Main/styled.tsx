import styled from 'styled-components';
import { IChildrenProps } from '@/utils';

const Block = styled.main`
  margin-top: 100px;
`;

export const Main = ({ children }: IChildrenProps) => {
  return <Block>{children}</Block>;
};
