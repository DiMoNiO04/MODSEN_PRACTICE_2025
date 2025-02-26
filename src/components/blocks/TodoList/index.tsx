import { Card, ICardProps } from '@/components/ui';

import { List } from './styled';

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
