import { TodoColumnHeader } from '../TodoColumnHeader';
import { TodoColumnTaskAdd } from '../TodoColumnTaskAdd';
import { TodoList } from '../TodoList';
import { TodoColumnContainer } from '../TodoColumnContainer';
import { ICardProps } from '../ui';
import { IOption } from '@/utils';

interface ITodoColumnProps {
  status: IOption;
  tasks: ICardProps[];
}

export const TodoColumn = ({ tasks, status }: ITodoColumnProps) => {
  return (
    <TodoColumnContainer>
      <TodoColumnHeader status={status} count={tasks.length} />
      <TodoList tasks={tasks} />
      <TodoColumnTaskAdd status={status} />
    </TodoColumnContainer>
  );
};
