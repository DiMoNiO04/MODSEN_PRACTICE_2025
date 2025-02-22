import { ModalContainer } from '@/components/layout';
import { ModalTitle } from '@/components/ui';
import { IModalCloseProps } from '@/utils';

export const ModalTask = ({ onClose }: IModalCloseProps) => {
  return (
    <ModalContainer onClose={onClose}>
      <ModalTitle text="Task" />
    </ModalContainer>
  );
};
