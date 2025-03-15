import { BtnDef, BtnsBlock, ColorText, ModalTitle, TextDef } from '@/components/ui';
import { CARD_PRIORITY, UITexts } from '@/constants';
import { useAppSelector } from '@/store/store';
import { ICard, IColumn, IKanbanData } from '@/utils/interfaces';

import { Content } from './styled';

interface ITaskModalContentProps {
  cardData: ICard;
  handleOpenDelete: () => void;
  handleOpenEdit: () => void;
}

export const TaskModalContent = ({ cardData, handleOpenDelete, handleOpenEdit }: ITaskModalContentProps) => {
  const { title, desc, priority, columnId } = cardData;

  const kanbanData: IKanbanData = useAppSelector((state) => state.kanbanBoard.kanbanData);
  const { columns } = kanbanData;
  const column: IColumn = columns[columnId];

  const priorityData = CARD_PRIORITY[priority];

  return (
    <>
      <ModalTitle text={title} />
      <Content>
        {desc && <TextDef text={desc} />}
        <div>
          <TextDef text={UITexts.LABELS.PRIORITY} />
          <ColorText color={priorityData.color} text={priorityData.title} isFullWidth />
        </div>
        <div>
          <TextDef text={UITexts.LABELS.STATUS} />
          <ColorText color={column.color} text={column.title} isFullWidth />
        </div>
        <BtnsBlock>
          <BtnDef text={UITexts.BTNS.EDIT} typeBtn={'button'} onClick={handleOpenEdit} />
          <BtnDef text={UITexts.BTNS.DELETE} typeBtn={'button'} isInvert onClick={handleOpenDelete} />
        </BtnsBlock>
      </Content>
    </>
  );
};
