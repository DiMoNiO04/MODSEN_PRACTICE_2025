import { Priority } from '@/components/blocks';
import { BtnRound, TextDef, TextH3 } from '@/components/ui';
import { useDragAndDropCard } from '@/hooks';
import { openModalTask } from '@/store/modalTask/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { ICard, IKanbanData } from '@/utils/interfaces';

import { Block, TopBlockInfo } from './styled';

export const Card = (cardData: ICard) => {
  const { id, title, desc, priority, columnId } = cardData;

  const dispatch = useAppDispatch();
  const kanbanData: IKanbanData = useAppSelector((state) => state.kanbanBoard.kanbanData);

  const { isDragOver, handleDragStart, handleDragOver, handleDragLeave, handleDrop } = useDragAndDropCard({
    cardId: id,
    columnId,
    kanbanData,
  });

  const handleOpenModal = () => dispatch(openModalTask(cardData));

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
