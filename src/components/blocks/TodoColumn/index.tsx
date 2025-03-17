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
    if (!draggedColumnId || draggedColumnId === id) return;

    const updatedColumnsOrder = [...columnsOrder];
    const fromIndex = updatedColumnsOrder.indexOf(draggedColumnId);
    const toIndex = updatedColumnsOrder.indexOf(id);

    if (fromIndex === -1 || toIndex === -1) return;

    updatedColumnsOrder.splice(fromIndex, 1);
    updatedColumnsOrder.splice(toIndex, 0, draggedColumnId);

    const updatedKanbanData = {
      ...kanbanData,
      columnsOrder: updatedColumnsOrder,
    };

    dispatch(setKanbanBoardData(updatedKanbanData));
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
