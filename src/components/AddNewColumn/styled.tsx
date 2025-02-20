import { ITodoColumnHeaderProps } from '../TodoColumnHeader';
import { TodoColumnContainer } from '../TodoColumnContainer';
import { TodoColumnHeaderNew } from '../TodoColumnHeaderNew';

export const AddNewColumn = ({ color, title, count }: ITodoColumnHeaderProps) => {
  return (
    <TodoColumnContainer isFullHeight={false}>
      <TodoColumnHeaderNew color={color} title={title} count={count} />
    </TodoColumnContainer>
  );
};
