import { DragEvent, useState } from 'react';

import { dragDropTaskBetweenColumns, dragDropTaskInColumn } from '@/store/kanbanBoard/actions';
import { useAppDispatch } from '@/store/store';

interface IUseDragAndDropTaskReturn {
  isDragOver: boolean;
  handleDragStart: (e: DragEvent<HTMLDivElement>) => void;
  handleDragOver: (e: DragEvent<HTMLDivElement>) => void;
  handleDragLeave: () => void;
  handleDrop: (e: DragEvent<HTMLDivElement>) => void;
}

interface IUseDragAndDropTaskProps {
  taskId: string;
  columnId: string;
}

export const useDragAndDropTask = ({ taskId, columnId }: IUseDragAndDropTaskProps): IUseDragAndDropTaskReturn => {
  const dispatch = useAppDispatch();
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('taskId', taskId);
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

    const draggedTaskId = e.dataTransfer.getData('taskId');
    const fromColumnId = e.dataTransfer.getData('fromColumnId');

    if (draggedTaskId && fromColumnId !== columnId) {
      dispatch(dragDropTaskBetweenColumns({ fromColumnId, draggedTaskId, columnId }));
    } else if (draggedTaskId && fromColumnId === columnId) {
      dispatch(dragDropTaskInColumn({ columnId, draggedTaskId, taskId }));
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
