import { ModalContainer } from '@/components/layout';
import { BtnDef, BtnsBlock, ModalTitle } from '@/components/ui';
import { UITexts } from '@/constants';
import { setKanbanBoardData } from '@/store/kanbanBoard/actions';
import { closeModalColumnDelete } from '@/store/modalColumnDelete/actions';
import { openNotification } from '@/store/notification/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';

export const ModalColumnDelete = () => {
  const dispatch = useAppDispatch();
  const { isOpen, id } = useAppSelector(({ modals }) => modals.modalColumnDelete);

  const kanbanData = useAppSelector(({ kanbanBoard }) => kanbanBoard.kanbanData);

  const handleClose = () => dispatch(closeModalColumnDelete());
  const handleSubmit = () => {
    const updatedKanbanData = { ...kanbanData };

    const column = updatedKanbanData.columns[id];
    const columnTitle = column.title;

    column.cardIds.forEach((cardId) => {
      delete updatedKanbanData.cards[cardId];
    });

    delete updatedKanbanData.columns[id];

    updatedKanbanData.columnsOrder = updatedKanbanData.columnsOrder.filter((columnId) => columnId !== id);

    dispatch(setKanbanBoardData(updatedKanbanData));

    dispatch(
      openNotification({
        isSuccess: true,
        text: `Column '${columnTitle}' and all its cards successfully deleted`,
      })
    );

    handleClose();
  };

  if (!isOpen) return null;

  return (
    <ModalContainer onClose={handleClose}>
      <ModalTitle text={UITexts.COLUMN.CONFIRM_DELETE} />
      <BtnsBlock>
        <BtnDef text={UITexts.BTNS.NO} typeBtn={'button'} onClick={handleClose} />
        <BtnDef text={UITexts.BTNS.YES} typeBtn={'button'} onClick={handleSubmit} isInvert />
      </BtnsBlock>
    </ModalContainer>
  );
};
