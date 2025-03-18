import { DragEvent, useState } from 'react';

import { Priority } from '@/components/blocks';
import { setKanbanBoardData } from '@/store/kanbanBoard/actions';
import { openModalTask } from '@/store/modalTask/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { ICard, IKanbanData } from '@/utils/interfaces';

import { BtnRound, TextDef, TextH3 } from '..';
import { Block, TopBlockInfo } from './styled';

export const Card = (cardData: ICard) => {
  const { id, title, desc, priority, columnId } = cardData;

  const dispatch = useAppDispatch();
  const kanbanData: IKanbanData = useAppSelector((state) => state.kanbanBoard.kanbanData);
  const column = kanbanData.columns[columnId];
  const cardIds = column.cardIds;

  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  const handleOpenModal = () => dispatch(openModalTask(cardData));

  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('cardId', id);
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

      const updatedCardIds = [...cardIds, draggedCardId];

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
      const updatedCardIds = [...cardIds];
      const fromIndex = updatedCardIds.indexOf(draggedCardId);
      const toIndex = updatedCardIds.indexOf(id);

      if (fromIndex === -1 || toIndex === -1 || fromIndex === toIndex) return;

      updatedCardIds.splice(fromIndex, 1);
      updatedCardIds.splice(toIndex, 0, draggedCardId);

      const updatedKanbanData: IKanbanData = {
        ...kanbanData,
        columns: {
          ...kanbanData.columns,
          [columnId]: {
            ...column,
            cardIds: updatedCardIds,
          },
        },
      };

      dispatch(setKanbanBoardData(updatedKanbanData));
    }
  };

  return (
    <Block
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      $isDragOver={isDragOver}
    >
      <TopBlockInfo>
        <Priority priorityId={priority} cardData={cardData} />
        <BtnRound type="maximize" handle={handleOpenModal} />
      </TopBlockInfo>
      <TextH3 text={title} />
      {desc && <TextDef text={desc} maxLines={3} />}
    </Block>
  );
};
