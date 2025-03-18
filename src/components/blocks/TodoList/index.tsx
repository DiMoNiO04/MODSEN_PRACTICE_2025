import { ICard } from '@/utils/interfaces';

import { Card } from '../Card';
import { List } from './styled';

interface ITodoListProps {
  tasks: ICard[];
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
