import { ModalContainer } from '@/components/layout';
import { ModalTitle } from '@/components/ui';
import { IModalCloseProps } from '@/utils';

export const ModalConfirm = ({ onClose }: IModalCloseProps) => {
  return (
    <ModalContainer onClose={onClose}>
      <ModalTitle text="Confirm action" />
    </ModalContainer>
  );
};
