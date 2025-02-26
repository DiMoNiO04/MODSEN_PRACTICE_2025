import { BtnDef, BtnsBlock, ModalTitle } from '@/components/ui';
import { UITexts } from '@/constants';

interface ITaskDeleteContentProps {
  handleCancel: () => void;
  handleClose: () => void;
}

export const TaskDeleteContent = ({ handleCancel, handleClose }: ITaskDeleteContentProps) => {
  return (
    <>
      <ModalTitle text={UITexts.TASK.CONFIRM_DELETE} />
      <BtnsBlock>
        <BtnDef text={UITexts.BTNS.CANCEL} typeBtn={'button'} onClick={handleCancel} />
        <BtnDef text={UITexts.BTNS.CONFIRM_DELETE} typeBtn={'button'} onClick={handleClose} isInvert />
      </BtnsBlock>
    </>
  );
};
