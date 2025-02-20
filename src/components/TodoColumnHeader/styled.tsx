import styled from 'styled-components';
import { getOpacityColor } from '@/utils';
import { BtnRound } from '../ui';

const Container = styled.div<{ color: string }>`
  border-radius: 32px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ color }) => color || '#C8CDC2'};
  position: relative;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Title = styled.h3`
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
  color: #fff;
`;

const TaskCount = styled.div<{ color: string }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #fff;
  color: ${({ color }) => getOpacityColor(color, 50) || '#C8CDC2'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 22px;
  font-weight: 600;
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
      <TitleWrapper>
        <TaskCount color={color}>{count}</TaskCount>
        <Title>{title}</Title>
      </TitleWrapper>
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
