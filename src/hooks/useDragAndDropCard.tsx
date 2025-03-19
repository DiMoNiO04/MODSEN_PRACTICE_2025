import { DragEvent, useState } from 'react';

import { dragDropCardBetweenColumns, dragDropCardInColumn } from '@/store/kanbanBoard/actions';
import { useAppDispatch } from '@/store/store';

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
}

export const useDragAndDropCard = ({ cardId, columnId }: IUseDragAndDropCardProps): IUseDragAndDropCardReturn => {
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
      dispatch(dragDropCardBetweenColumns({ fromColumnId, draggedCardId, columnId }));
    } else if (draggedCardId && fromColumnId === columnId) {
      dispatch(dragDropCardInColumn({ columnId, draggedCardId, cardId }));
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
