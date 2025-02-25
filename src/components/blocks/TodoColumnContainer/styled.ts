import styled from 'styled-components';

const TodoColumnContainerBlock = styled.div<{ $isFullHeight?: boolean }>`
  border-radius: var(--radius-xl);
  padding: var(--padding-m);
  background-color: var(--color-light);
  display: flex;
  flex-direction: column;
  row-gap: var(--gap-xl);
  height: ${({ $isFullHeight }) => ($isFullHeight ? '100%' : 'fit-content')};
`;

export { TodoColumnContainerBlock };
