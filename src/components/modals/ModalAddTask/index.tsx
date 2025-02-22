import { ModalContainer } from '@/components/layout';
import { ModalTitle } from '@/components/ui';
import { IModalCloseProps } from '@/utils';

export const ModalAddTask = ({ onClose }: IModalCloseProps) => {
  return (
    <ModalContainer onClose={onClose}>
      <ModalTitle text="Add new task" />
    </ModalContainer>
  );
};
