import { BtnDef, BtnsBlock, ColorText, ICardProps, ModalTitle, TextDef } from '../ui';
import { Content } from './styled';

interface ITaskModalContentProps {
  cardData: ICardProps;
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
          <TextDef text={'Prioritet'} />
          <ColorText color={priority.color} text={priority.value} isFullWidth />
        </div>
        <div>
          <TextDef text={'Status'} />
          <ColorText color={status.color} text={status.value} isFullWidth />
        </div>
        <BtnsBlock>
          <BtnDef text={'Edit'} typeBtn={'button'} onClick={handleOpenEdit} />
          <BtnDef text={'Delete'} typeBtn={'button'} isInvert onClick={handleOpenDelete} />
        </BtnsBlock>
      </Content>
    </>
  );
};
