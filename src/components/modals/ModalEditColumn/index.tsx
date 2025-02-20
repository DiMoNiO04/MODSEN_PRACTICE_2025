import { ModalContainer } from '@/components/layout';
import { IModalCloseProps } from '@/utils';

export const ModalEditColumn = ({ onClose }: IModalCloseProps) => {
  return (
    <ModalContainer onClose={onClose}>
      <p>Редактировать колонку</p>
    </ModalContainer>
  );
};
