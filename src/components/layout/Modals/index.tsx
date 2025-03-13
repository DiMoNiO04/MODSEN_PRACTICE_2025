import { ModalAddColumn, ModalAddTask, ModalConfirm, ModalEditColumn, ModalTask } from '@/components/modals';

export const Modals = () => {
  return (
    <>
      <ModalTask />
      <ModalAddTask />
      <ModalAddColumn />
      <ModalEditColumn />
      <ModalConfirm />
    </>
  );
};
