import { ModalContainer } from '@/components/layout';
import { IModalCloseProps } from '@/utils';

export const ModalAddTask = ({ onClose }: IModalCloseProps) => {
  return (
    <ModalContainer onClose={onClose}>
      <p>Добавить задачу</p>
    </ModalContainer>
  );
};
