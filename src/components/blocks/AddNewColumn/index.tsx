import { TodoColumnContainer } from '../TodoColumnContainer';
import { ITodoColumnHeaderProps, TodoColumnHeader } from '../TodoColumnHeader';

export const AddNewColumn = ({ title, color, count }: ITodoColumnHeaderProps) => {
  return (
    <TodoColumnContainer isFullHeight={false}>
      <TodoColumnHeader title={title} color={color} count={count} isAddNewColumn />
    </TodoColumnContainer>
  );
};
