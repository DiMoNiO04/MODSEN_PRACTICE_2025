import styled from 'styled-components';
import { ITodoColumnHeaderProps, TodoColumnHeader } from '../TodoColumnHeader';
import { TodoColumnTaskAdd } from '../TodoColumnTaskAdd';

const Container = styled.div`
  border-radius: 32px;
  padding: 12px;
  background-color: #f8fafc;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const TodoColumn = ({ color, title, count }: ITodoColumnHeaderProps) => {
  return (
    <Container>
      <TodoColumnHeader color={color} title={title} count={count} />
      <TodoColumnTaskAdd color={color} />
    </Container>
  );
};
