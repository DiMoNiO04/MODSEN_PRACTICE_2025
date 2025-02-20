import styled from 'styled-components';
import { Card, ICardProps } from '../ui';

const List = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  max-height: 50vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
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
