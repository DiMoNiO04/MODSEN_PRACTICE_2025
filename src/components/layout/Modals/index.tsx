import { ModalAddColumn, ModalAddTask, ModalTask } from '@/components/modals';
import { toggleModaColumnAdd } from '@/store/modalColumnAdd/actions';
import { toggleModalTask } from '@/store/modalTask/actions';
import { toggleModalTaskAdd } from '@/store/modalTaskAdd/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';

export const Modals = () => {
  const dispatch = useAppDispatch();

  const { isOpen: isOpenModalTask, cardData } = useAppSelector(({ modals }) => modals.modalTask);
  const { isOpen: isOpenModalColumn } = useAppSelector(({ modals }) => modals.modalColumnAdd);
  const { isOpen: isOpenModalTaskAdd, isFromHeader, status } = useAppSelector(({ modals }) => modals.modalTaskAdd);

  const handleCloseModalTask = () => dispatch(toggleModalTask(null));
  const handleCloseModalColumnAdd = () => dispatch(toggleModaColumnAdd());
  const handleCloseModalTaskAdd = () => dispatch(toggleModalTaskAdd());

  return (
    <>
      {isOpenModalTask && cardData && <ModalTask onClose={handleCloseModalTask} cardData={cardData} />}
      {isOpenModalColumn && <ModalAddColumn onClose={handleCloseModalColumnAdd} />}
      {isOpenModalTaskAdd && (
        <ModalAddTask onClose={handleCloseModalTaskAdd} isFromHeader={isFromHeader} status={status ?? undefined} />
      )}
    </>
  );
};
