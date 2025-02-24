import { ITodoColumnHeaderProps, TodoColumnHeader } from '../TodoColumnHeader';
import { TodoColumnContainer } from '../TodoColumnContainer';

export const AddNewColumn = ({ status, count }: ITodoColumnHeaderProps) => {
  return (
    <TodoColumnContainer isFullHeight={false}>
      <TodoColumnHeader status={status} count={count} isAddNewColumn />
    </TodoColumnContainer>
  );
};
