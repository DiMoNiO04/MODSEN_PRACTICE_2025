import styled from 'styled-components';
import { ITodoColumnHeaderProps, TodoColumnHeader } from '../TodoColumnHeader';
import { TodoColumnTaskAdd } from '../TodoColumnTaskAdd';
import { TodoList } from '../TodoList';

const Container = styled.div`
  border-radius: 32px;
  padding: 12px;
  background-color: #f8fafc;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

interface ITodoColumnProps extends ITodoColumnHeaderProps {
  tasks: {
    id: number;
    title: string;
    desc: string;
    priority?: string;
  }[];
}

export const TodoColumn = ({ color, title, count, tasks }: ITodoColumnProps) => {
  return (
    <Container>
      <TodoColumnHeader color={color} title={title} count={count} />
      <TodoList tasks={tasks} />
      <TodoColumnTaskAdd color={color} />
    </Container>
  );
};
