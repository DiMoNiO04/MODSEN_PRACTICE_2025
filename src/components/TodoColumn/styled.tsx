import { ITodoColumnHeaderProps, TodoColumnHeader } from '../TodoColumnHeader';
import { TodoColumnTaskAdd } from '../TodoColumnTaskAdd';
import { TodoList } from '../TodoList';
import { ICardProps } from '../Card';
import { TodoColumnContainer } from '../TodoColumnContainer';

interface ITodoColumnProps extends ITodoColumnHeaderProps {
  tasks: ICardProps[];
}

export const TodoColumn = ({ color, title, count, tasks, handle }: ITodoColumnProps) => {
  return (
    <TodoColumnContainer>
      <TodoColumnHeader color={color} title={title} count={count} handle={handle} />
      <TodoList tasks={tasks} />
      <TodoColumnTaskAdd color={color} />
    </TodoColumnContainer>
  );
};
