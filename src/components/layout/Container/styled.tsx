import styled from 'styled-components';
import { IChildrenProps } from '@/utils';

const Block = styled.div`
  max-width: 1035px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const Container = ({ children }: IChildrenProps) => {
  return <Block>{children}</Block>;
};
