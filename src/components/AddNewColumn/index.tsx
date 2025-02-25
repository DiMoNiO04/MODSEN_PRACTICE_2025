import { TodoColumnContainer } from '../TodoColumnContainer';
import { ITodoColumnHeaderProps, TodoColumnHeader } from '../TodoColumnHeader';

export const AddNewColumn = ({ status, count }: ITodoColumnHeaderProps) => {
  return (
    <TodoColumnContainer isFullHeight={false}>
      <TodoColumnHeader status={status} count={count} isAddNewColumn />
    </TodoColumnContainer>
  );
};
