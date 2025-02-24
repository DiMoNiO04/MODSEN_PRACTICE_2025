import { BtnDef, BtnsBlock, ModalTitle } from '../ui';

interface ITaskDeleteContentProps {
  title: string;
  handleCancel: () => void;
  handleClose: () => void;
}

export const TaskDeleteContent = ({ title, handleCancel, handleClose }: ITaskDeleteContentProps) => {
  return (
    <>
      <ModalTitle text={`Are you sure you want to delete ${title} task?`} />
      <BtnsBlock>
        <BtnDef text={'Cancel'} typeBtn={'button'} onClick={handleCancel} />
        <BtnDef text={'Yes, Delete'} typeBtn={'button'} onClick={handleClose} isInvert />
      </BtnsBlock>
    </>
  );
};
