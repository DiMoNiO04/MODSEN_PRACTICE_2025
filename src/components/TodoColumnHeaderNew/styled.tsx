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

export interface ITodoColumnHeaderNewProps {
  color: string;
  title: string;
  count: number;
}

export const TodoColumnHeaderNew = ({ color, count, title }: ITodoColumnHeaderNewProps) => {
  return (
    <Container color={color}>
      <TitleWithCount color={color} title={title} count={count} />
      <BtnRound color="#FFFFFF" handle={() => alert('Добавление колонки')} type="add" />
    </Container>
  );
};
