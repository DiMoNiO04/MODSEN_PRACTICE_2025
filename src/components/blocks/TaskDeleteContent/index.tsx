import { BtnDef, BtnsBlock, ModalTitle } from '@/components/ui';
import { UITexts } from '@/constants';
import { useTaskActions } from '@/hooks';

interface ITaskDeleteContentProps {
  id: string;
  handleCancel: () => void;
  onClose: () => void;
}

export const TaskDeleteContent = ({ id, handleCancel, onClose }: ITaskDeleteContentProps) => {
  const { handleDeleteTask } = useTaskActions();

  const handeConfirm = () => {
    handleDeleteTask(id);
    onClose();
  };

  return (
    <>
      <ModalTitle text={UITexts.TASK.CONFIRM_DELETE} />
      <BtnsBlock>
        <BtnDef text={UITexts.BTNS.CANCEL} typeBtn={'button'} onClick={handleCancel} />
        <BtnDef text={UITexts.BTNS.CONFIRM_DELETE} typeBtn={'button'} onClick={handeConfirm} isInvert />
      </BtnsBlock>
    </>
  );
};
