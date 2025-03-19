import { useDragAndDropColumn } from '@/hooks';
import { useAppSelector } from '@/store/store';
import { ICard, IColumn } from '@/utils/interfaces';

import { TodoColumnHeader } from '../TodoColumnHeader';
import { TodoColumnTaskAdd } from '../TodoColumnTaskAdd';
import { TodoList } from '../TodoList';
import { TodoColumnContainerBlock } from './styled';

export const TodoColumn = ({ id, cardIds, color, title }: IColumn) => {
  const { kanbanData } = useAppSelector((state) => state.kanbanBoard);
  const tasks: ICard[] = cardIds.map((id) => kanbanData.cards[id]);

  const { isDragOver, handleDragStart, handleDragOver, handleDragLeave, handleDrop } = useDragAndDropColumn({
    id,
    cardIds,
  });

  return (
    <TodoColumnContainerBlock
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      $isDragOver={isDragOver}
    >
      <TodoColumnHeader id={id} title={title} color={color} cardIds={cardIds} columnId={id} />
      <TodoList tasks={tasks} />
      <TodoColumnTaskAdd columnId={id} title={title} color={color} />
    </TodoColumnContainerBlock>
  );
};
