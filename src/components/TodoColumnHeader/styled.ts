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

const Btns = styled.div`
  display: flex;
  column-gap: 10px;
`;

const EditDeleteBtns = styled.div`
  display: flex;
  column-gap: 10px;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;

  ${TodoColumnHeaderContainer}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

export { TodoColumnHeaderContainer, Btns, EditDeleteBtns };
