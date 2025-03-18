import { BtnDef, BtnsBlock, ModalTitle } from '@/components/ui';
import { UITexts } from '@/constants';
import { deleteKanbanTask } from '@/store/kanbanBoard/actions';
import { openNotification } from '@/store/notification/actions';
import { useAppDispatch } from '@/store/store';

interface ITaskDeleteContentProps {
  id: string;
  handleCancel: () => void;
  onClose: () => void;
}

export const TaskDeleteContent = ({ id, handleCancel, onClose }: ITaskDeleteContentProps) => {
  const dispatch = useAppDispatch();

  const handeConfirm = () => {
    dispatch(deleteKanbanTask(id));

    dispatch(
      openNotification({
        isSuccess: true,
        text: UITexts.NOTIFICATION.SUCCESS_DELETE_CARD,
      })
    );

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
