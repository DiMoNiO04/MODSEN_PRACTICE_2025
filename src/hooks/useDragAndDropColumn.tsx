import { DragEvent, useState } from 'react';

import { dragDropColumn, dragDropColumnTask } from '@/store/kanbanBoard/actions';
import { useAppDispatch } from '@/store/store';

interface IUseDragAndDropColumnProps {
  id: string;
  taskIds: string[];
}

interface IUseDragAndDropColumnReturn {
  isDragOver: boolean;
  handleDragStart: (e: DragEvent<HTMLDivElement>) => void;
  handleDragOver: (e: DragEvent<HTMLDivElement>) => void;
  handleDragLeave: () => void;
  handleDrop: (e: DragEvent<HTMLDivElement>) => void;
}

export const useDragAndDropColumn = ({ id, taskIds }: IUseDragAndDropColumnProps): IUseDragAndDropColumnReturn => {
  const dispatch = useAppDispatch();

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
    const draggedTaskId = e.dataTransfer.getData('taskId');
    const fromColumnId = e.dataTransfer.getData('fromColumnId');

    if (draggedColumnId && draggedColumnId !== id) {
      if (!draggedTaskId) {
        dispatch(dragDropColumn({ draggedColumnId, id, draggedTaskId }));
      }
    }

    if (draggedTaskId) {
      dispatch(dragDropColumnTask({ taskIds, id, fromColumnId, draggedTaskId }));
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
