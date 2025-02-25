import styled from 'styled-components';

const TodoColumnHeaderContainer = styled.div<{ color: string }>`
  border-radius: var(--radius-xl);
  padding: var(--padding-s);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ color }) => color || 'var(--color-sage)'};
  position: relative;
`;

export { TodoColumnHeaderContainer };
