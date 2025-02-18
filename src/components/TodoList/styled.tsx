import styled from 'styled-components';
import { Card, ICardProps } from '../Card';

const List = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

interface ITodoListProps {
  tasks: ICardProps[];
}

export const TodoList = ({ tasks }: ITodoListProps) => {
  return (
    <List>
      {tasks.map((task) => (
        <Card key={task.id} {...task} />
      ))}
    </List>
  );
};
