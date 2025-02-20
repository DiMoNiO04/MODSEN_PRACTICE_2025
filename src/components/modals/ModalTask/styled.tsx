import { ModalContainer } from '@/components/layout';
import { IModalCloseProps } from '@/utils';

export const ModalTask = ({ onClose }: IModalCloseProps) => {
  return (
    <ModalContainer onClose={onClose}>
      <p>Таска подробная инфа</p>
    </ModalContainer>
  );
};
