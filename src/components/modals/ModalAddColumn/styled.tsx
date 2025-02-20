import { ModalContainer } from '@/components/layout';
import { IModalCloseProps } from '@/utils';

export const ModalAddColumn = ({ onClose }: IModalCloseProps) => {
  return (
    <ModalContainer onClose={onClose}>
      <p>Добавить колонку</p>
    </ModalContainer>
  );
};
