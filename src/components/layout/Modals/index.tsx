import { ModalAddColumn, ModalAddTask, ModalColumnDelete, ModalEditColumn, ModalTask } from '@/components/modals';

export const Modals = () => {
  return (
    <>
      <ModalTask />
      <ModalAddTask />
      <ModalAddColumn />
      <ModalEditColumn />
      <ModalColumnDelete />
    </>
  );
};
