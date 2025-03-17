import { BtnDef, BtnsBlock, ModalTitle } from '@/components/ui';
import { UITexts } from '@/constants';
import { setKanbanBoardData } from '@/store/kanbanBoard/actions';
import { openNotification } from '@/store/notification/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';

interface ITaskDeleteContentProps {
  id: string;
  handleCancel: () => void;
  onClose: () => void;
}

export const TaskDeleteContent = ({ id, handleCancel, onClose }: ITaskDeleteContentProps) => {
  const dispatch = useAppDispatch();
  const kanbanData = useAppSelector(({ kanbanBoard }) => kanbanBoard.kanbanData);
  const { title, columnId } = kanbanData.cards[id];

  const handeConfirm = () => {
    const updatedCards = { ...kanbanData.cards };
    delete updatedCards[id];

    const updatedColumns = { ...kanbanData.columns };
    updatedColumns[columnId] = {
      ...updatedColumns[columnId],
      cardIds: updatedColumns[columnId].cardIds.filter((cardId) => cardId !== id),
    };

    const updatedKanbanData = {
      columns: updatedColumns,
      cards: updatedCards,
      columnsOrder: kanbanData.columnsOrder,
    };

    dispatch(setKanbanBoardData(updatedKanbanData));

    dispatch(
      openNotification({
        isSuccess: true,
        text: `Task '${title}' successfully deleted`,
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
