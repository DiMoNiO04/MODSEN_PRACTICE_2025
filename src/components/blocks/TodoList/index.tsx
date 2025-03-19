import { ITask } from '@/utils/interfaces';

import { Task } from '../Task';
import { List } from './styled';

interface ITodoListProps {
  tasks: ITask[];
}

export const TodoList = ({ tasks }: ITodoListProps) => {
  return (
    <List>
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </List>
  );
};
