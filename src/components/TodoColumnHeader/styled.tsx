import styled from 'styled-components';
import { BtnRound } from '../ui';
import { TitleWithCount } from '../TitleWithCount';

const Container = styled.div<{ color: string }>`
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

  ${Container}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

export interface ITodoColumnHeaderProps {
  color: string;
  title: string;
  count: number;
}

export const TodoColumnHeader = ({ color, count, title }: ITodoColumnHeaderProps) => {
  return (
    <Container color={color}>
      <TitleWithCount color={color} title={title} count={count} />
      <Btns>
        <EditDeleteBtns>
          <BtnRound color="#FFFFFF" handle={() => alert('Редактирование колонки')} type="edit" />
          <BtnRound color="#FFFFFF" handle={() => alert('Удаление колонки')} type="delete" />
        </EditDeleteBtns>
        <BtnRound color="#FFFFFF" handle={() => alert('Добавление задачи')} type="add" />
      </Btns>
    </Container>
  );
};
