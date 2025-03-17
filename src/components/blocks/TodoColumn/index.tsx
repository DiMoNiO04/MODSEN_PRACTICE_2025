import { useState } from 'react';

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

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('columnId', id);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);

    const draggedColumnId = e.dataTransfer.getData('columnId');

    if (draggedColumnId === id) return;

    const updatedcolumnsOrder = [...columnsOrder];
    const draggedIndex = updatedcolumnsOrder.indexOf(draggedColumnId);
    const targetIndex = updatedcolumnsOrder.indexOf(id);

    if (draggedIndex !== targetIndex) {
      updatedcolumnsOrder.splice(draggedIndex, 1);
      updatedcolumnsOrder.splice(targetIndex, 0, draggedColumnId);

      const updatedKanbanData = {
        ...kanbanData,
        columnsOrder: updatedcolumnsOrder,
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
