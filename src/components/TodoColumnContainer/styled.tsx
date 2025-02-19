import styled from 'styled-components';
import { IChildrenProps } from '@/utils';

const Container = styled.div<{ isFullHeight?: boolean }>`
  border-radius: 32px;
  padding: 12px;
  background-color: #f8fafc;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  height: ${({ isFullHeight }) => (isFullHeight ? '100%' : 'fit-content')};
`;

interface ITodoColumnContainer extends IChildrenProps {
  isFullHeight?: boolean;
}

export const TodoColumnContainer = ({ children, isFullHeight = true }: ITodoColumnContainer) => {
  return <Container isFullHeight={isFullHeight}>{children}</Container>;
};
