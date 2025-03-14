import { BtnDef, BtnsBlock, ColorText, ModalTitle, TextDef } from '@/components/ui';
import { UITexts } from '@/constants';
import { ICard } from '@/utils/interfaces';

import { Content } from './styled';

interface ITaskModalContentProps {
  cardData: ICard;
  handleOpenDelete: () => void;
  handleOpenEdit: () => void;
}

export const TaskModalContent = ({ cardData, handleOpenDelete, handleOpenEdit }: ITaskModalContentProps) => {
  const { title, desc, priority, status } = cardData;

  return (
    <>
      <ModalTitle text={title} />
      <Content>
        <TextDef text={desc} />
        <div>
          <TextDef text={UITexts.LABELS.PRIORITY} />
          <ColorText color={priority.color} text={priority.value} isFullWidth />
        </div>
        <div>
          <TextDef text={UITexts.LABELS.STATUS} />
          <ColorText color={status.color} text={status.value} isFullWidth />
        </div>
        <BtnsBlock>
          <BtnDef text={UITexts.BTNS.EDIT} typeBtn={'button'} onClick={handleOpenEdit} />
          <BtnDef text={UITexts.BTNS.DELETE} typeBtn={'button'} isInvert onClick={handleOpenDelete} />
        </BtnsBlock>
      </Content>
    </>
  );
};
