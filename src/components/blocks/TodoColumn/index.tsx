import { ICardProps } from '@/components/ui';
import { IOption } from '@/utils';

import { TodoColumnContainer } from '../TodoColumnContainer';
import { TodoColumnHeader } from '../TodoColumnHeader';
import { TodoColumnTaskAdd } from '../TodoColumnTaskAdd';
import { TodoList } from '../TodoList';

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
