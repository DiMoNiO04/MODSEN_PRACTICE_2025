import { ModalContainer } from '@/components/layout';
import { IModalCloseProps } from '@/utils';

export const ModalConfirm = ({ onClose }: IModalCloseProps) => {
  return (
    <ModalContainer onClose={onClose}>
      <p>Подтверждение действия</p>
    </ModalContainer>
  );
};
