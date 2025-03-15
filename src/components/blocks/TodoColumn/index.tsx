import { useAppSelector } from '@/store/store';
import { ICard, IColumn, IKanbanData } from '@/utils/interfaces';

import { TodoColumnContainer } from '../TodoColumnContainer';
import { TodoColumnHeader } from '../TodoColumnHeader';
import { TodoColumnTaskAdd } from '../TodoColumnTaskAdd';
import { TodoList } from '../TodoList';

export const TodoColumn = ({ cardIds, color, title }: IColumn) => {
  const kanbanData: IKanbanData = useAppSelector((state) => state.kanbanBoard.kanbanData);
  const { cards } = kanbanData;

  const tasks: ICard[] = cardIds.map((id) => cards[id]);

  return (
    <TodoColumnContainer>
      <TodoColumnHeader title={title} color={color} count={cardIds.length} />
      <TodoList tasks={tasks} />
      <TodoColumnTaskAdd title={title} color={color} />
    </TodoColumnContainer>
  );
};
