import { DragEvent, useState } from 'react';

import { setKanbanBoardData } from '@/store/kanbanBoard/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { ICard, IColumn, IKanbanData } from '@/utils/interfaces';

import { TodoColumnHeader } from '../TodoColumnHeader';
import { TodoColumnTaskAdd } from '../TodoColumnTaskAdd';
import { TodoList } from '../TodoList';
import { TodoColumnContainerBlock } from './styled';

export const TodoColumn = ({ id, cardIds, color, title }: IColumn) => {
  const dispatch = useAppDispatch();
  const kanbanData: IKanbanData = useAppSelector((state) => state.kanbanBoard.kanbanData);
  const { cards, columnsOrder } = kanbanData;

  const tasks: ICard[] = cardIds.map((id) => cards[id]);

  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('columnId', id);
    e.dataTransfer.setData('fromColumnId', id);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => setIsDragOver(false);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);

    const draggedColumnId = e.dataTransfer.getData('columnId');
    const draggedCardId = e.dataTransfer.getData('cardId');

    if (draggedColumnId && draggedColumnId !== id) {
      const fromIndex = columnsOrder.indexOf(draggedColumnId);
      const toIndex = columnsOrder.indexOf(id);

      if (fromIndex === -1 || toIndex === -1) return;

      const updatedColumnsOrder = [...columnsOrder];
      updatedColumnsOrder.splice(fromIndex, 1);
      updatedColumnsOrder.splice(toIndex, 0, draggedColumnId);

      const updatedKanbanData = {
        ...kanbanData,
        columnsOrder: updatedColumnsOrder,
      };

      dispatch(setKanbanBoardData(updatedKanbanData));
    }

    if (draggedCardId) {
      const fromColumnId = e.dataTransfer.getData('fromColumnId');
      const updatedCardIds = [...cardIds];

      if (fromColumnId === id) return;

      const fromColumn = kanbanData.columns[fromColumnId];
      const updatedFromCardIds = fromColumn.cardIds.filter((cardId) => cardId !== draggedCardId);

      const updatedCard = { ...kanbanData.cards[draggedCardId], columnId: id };

      const updatedKanbanData: IKanbanData = {
        ...kanbanData,
        columns: {
          ...kanbanData.columns,
          [fromColumnId]: {
            ...fromColumn,
            cardIds: updatedFromCardIds,
          },
          [id]: {
            ...kanbanData.columns[id],
            cardIds: [...updatedCardIds, draggedCardId],
          },
        },
        cards: {
          ...kanbanData.cards,
          [draggedCardId]: updatedCard,
        },
      };

      dispatch(setKanbanBoardData(updatedKanbanData));
    }
  };

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
