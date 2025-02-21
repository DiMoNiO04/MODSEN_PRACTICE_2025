import styled from 'styled-components';

const TodoColumnHeaderContainer = styled.div<{ color: string }>`
  border-radius: 32px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ color }) => color || '#C8CDC2'};
  position: relative;
`;

export { TodoColumnHeaderContainer };
