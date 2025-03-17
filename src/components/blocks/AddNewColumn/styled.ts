import styled from 'styled-components';

const TodoColumnContainerBlock = styled.div`
  border-radius: var(--radius-xl);
  padding: var(--padding-m);
  background-color: var(--color-light);
  display: flex;
  flex-direction: column;
  row-gap: var(--gap-xl);
  height: fit-content;
  border: 2px solid transparent;
`;

export { TodoColumnContainerBlock };
