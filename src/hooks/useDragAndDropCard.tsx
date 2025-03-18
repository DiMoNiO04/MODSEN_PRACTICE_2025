import { DragEvent, useState } from 'react';

import { setKanbanBoardData } from '@/store/kanbanBoard/actions';
import { useAppDispatch } from '@/store/store';
import { IKanbanData } from '@/utils/interfaces';

interface IUseDragAndDropCardReturn {
  isDragOver: boolean;
  handleDragStart: (e: DragEvent<HTMLDivElement>) => void;
  handleDragOver: (e: DragEvent<HTMLDivElement>) => void;
  handleDragLeave: () => void;
  handleDrop: (e: DragEvent<HTMLDivElement>) => void;
}

interface IUseDragAndDropCardProps {
  cardId: string;
  columnId: string;
  kanbanData: IKanbanData;
}

export const useDragAndDropCard = ({
  cardId,
  columnId,
  kanbanData,
}: IUseDragAndDropCardProps): IUseDragAndDropCardReturn => {
  const dispatch = useAppDispatch();
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('cardId', cardId);
    e.dataTransfer.setData('fromColumnId', columnId);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => setIsDragOver(false);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);

    const draggedCardId = e.dataTransfer.getData('cardId');
    const fromColumnId = e.dataTransfer.getData('fromColumnId');

    if (draggedCardId && fromColumnId !== columnId) {
      const fromColumn = kanbanData.columns[fromColumnId];
      const updatedFromCardIds = fromColumn.cardIds.filter((cardId) => cardId !== draggedCardId);

      const updatedCard = { ...kanbanData.cards[draggedCardId], columnId };

      const updatedCardIds = [...kanbanData.columns[columnId].cardIds, draggedCardId];

      const updatedKanbanData: IKanbanData = {
        ...kanbanData,
        columns: {
          ...kanbanData.columns,
          [fromColumnId]: {
            ...fromColumn,
            cardIds: updatedFromCardIds,
          },
          [columnId]: {
            ...kanbanData.columns[columnId],
            cardIds: updatedCardIds,
          },
        },
        cards: {
          ...kanbanData.cards,
          [draggedCardId]: updatedCard,
        },
      };

      dispatch(setKanbanBoardData(updatedKanbanData));
    } else if (draggedCardId && fromColumnId === columnId) {
      const updatedCardIds = [...kanbanData.columns[columnId].cardIds];
      const fromIndex = updatedCardIds.indexOf(draggedCardId);
      const toIndex = updatedCardIds.indexOf(cardId);

      if (fromIndex === -1 || toIndex === -1 || fromIndex === toIndex) return;

      updatedCardIds.splice(fromIndex, 1);
      updatedCardIds.splice(toIndex, 0, draggedCardId);

      const updatedKanbanData: IKanbanData = {
        ...kanbanData,
        columns: {
          ...kanbanData.columns,
          [columnId]: {
            ...kanbanData.columns[columnId],
            cardIds: updatedCardIds,
          },
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
