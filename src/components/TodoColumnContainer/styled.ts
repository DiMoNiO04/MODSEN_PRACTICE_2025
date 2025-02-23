import styled from 'styled-components';

const TodoColumnContainerBlock = styled.div<{ $isFullHeight?: boolean }>`
  border-radius: 32px;
  padding: 12px;
  background-color: #f8fafc;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  height: ${({ $isFullHeight }) => ($isFullHeight ? '100%' : 'fit-content')};
`;

export { TodoColumnContainerBlock };
