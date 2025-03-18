import styled from 'styled-components';

const TodoColumnContainerBlock = styled.div<{ $isDragOver?: boolean }>`
  border-radius: var(--radius-xl);
  padding: var(--padding-m);
  background-color: var(--color-light);
  display: flex;
  flex-direction: column;
  row-gap: var(--gap-xl);
  height: 100%;
  border: 2px solid transparent;

  ${({ $isDragOver }) =>
    $isDragOver &&
    `
    border: 2px dashed #92948f;
  `}
`;

export { TodoColumnContainerBlock };
