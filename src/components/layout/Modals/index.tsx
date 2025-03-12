import { ModalAddColumn, ModalAddTask, ModalConfirm, ModalEditColumn, ModalTask } from '@/components/modals';
import { toggleModaColumnAdd } from '@/store/modalColumnAdd/actions';
import { toggleModaColumnEdit } from '@/store/modalColumnEdit/actions';
import { toggleModalConfirm } from '@/store/modalConfirm/actions';
import { toggleModalTask } from '@/store/modalTask/actions';
import { toggleModalTaskAdd } from '@/store/modalTaskAdd/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';

export const Modals = () => {
  const dispatch = useAppDispatch();

  const { isOpen: isOpenModalTask, cardData } = useAppSelector(({ modals }) => modals.modalTask);
  const { isOpen: isOpenModalColumn } = useAppSelector(({ modals }) => modals.modalColumnAdd);
  const { isOpen: isOpenModalTaskAdd, isFromHeader, status } = useAppSelector(({ modals }) => modals.modalTaskAdd);
  const { isOpen: isOpenModalColumnEdit, name, color } = useAppSelector(({ modals }) => modals.modalColumnEdit);
  const { isOpen: isOpenModalConfirm, text, onConfirm } = useAppSelector(({ modals }) => modals.modalConfirm);

  const handleCloseModalTask = () => dispatch(toggleModalTask(null));
  const handleCloseModalColumnAdd = () => dispatch(toggleModaColumnAdd());
  const handleCloseModalTaskAdd = () => dispatch(toggleModalTaskAdd());
  const handleCloseModalColumnEdit = () => dispatch(toggleModaColumnEdit({ name, color }));
  const handleCloseModalConfirm = () => dispatch(toggleModalConfirm({ text: null, onConfirm: null }));

  return (
    <>
      {isOpenModalTask && cardData && <ModalTask onClose={handleCloseModalTask} cardData={cardData} />}
      {isOpenModalTaskAdd && (
        <ModalAddTask onClose={handleCloseModalTaskAdd} isFromHeader={isFromHeader} status={status ?? undefined} />
      )}
      {isOpenModalColumn && <ModalAddColumn onClose={handleCloseModalColumnAdd} />}
      {isOpenModalColumnEdit && <ModalEditColumn onClose={handleCloseModalColumnEdit} name={name} color={color} />}
      {isOpenModalConfirm && text && (
        <ModalConfirm
          onClose={handleCloseModalConfirm}
          text={text}
          handleYes={() => {
            onConfirm?.();
            handleCloseModalConfirm();
          }}
        />
      )}
    </>
  );
};
