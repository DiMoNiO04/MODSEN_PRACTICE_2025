import { ITodoColumnHeaderProps, TodoColumnHeader } from '../TodoColumnHeader';
import { TodoColumnContainer } from '../TodoColumnContainer';

export const AddNewColumn = ({ color, title, count }: ITodoColumnHeaderProps) => {
  return (
    <TodoColumnContainer isFullHeight={false}>
      <TodoColumnHeader color={color} title={title} count={count} />
    </TodoColumnContainer>
  );
};
