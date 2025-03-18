import { DragEvent, useState } from 'react';

import { setKanbanBoardData } from '@/store/kanbanBoard/actions';
import { useAppDispatch } from '@/store/store';
import { ICard, IColumn, IKanbanData } from '@/utils/interfaces';

interface IUseDragAndDropColumnProps {
  id: string;
  cardIds: string[];
  kanbanData: IKanbanData;
}

interface IUseDragAndDropColumnReturn {
  isDragOver: boolean;
  handleDragStart: (e: DragEvent<HTMLDivElement>) => void;
  handleDragOver: (e: DragEvent<HTMLDivElement>) => void;
  handleDragLeave: () => void;
  handleDrop: (e: DragEvent<HTMLDivElement>) => void;
}

export const useDragAndDropColumn = ({
  id,
  cardIds,
  kanbanData,
}: IUseDragAndDropColumnProps): IUseDragAndDropColumnReturn => {
  const dispatch = useAppDispatch();
  const { columnsOrder } = kanbanData;

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

      const updatedKanbanData: IKanbanData = {
        ...kanbanData,
        columnsOrder: updatedColumnsOrder,
      };

      dispatch(setKanbanBoardData(updatedKanbanData));
    }

    if (draggedCardId) {
      const fromColumnId = e.dataTransfer.getData('fromColumnId');
      const updatedCardIds = [...cardIds];

      if (fromColumnId === id) return;

      const fromColumn: IColumn = kanbanData.columns[fromColumnId];
      const updatedFromCardIds: string[] = fromColumn.cardIds.filter((cardId) => cardId !== draggedCardId);

      const updatedCard: ICard = { ...kanbanData.cards[draggedCardId], columnId: id };

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

  return {
    isDragOver,
    handleDragStart,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  };
};
