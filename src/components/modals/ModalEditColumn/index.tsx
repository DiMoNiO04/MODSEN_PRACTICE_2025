import { ModalContainer } from '@/components/layout';
import { ModalTitle } from '@/components/ui';
import { IModalCloseProps } from '@/utils';

export const ModalEditColumn = ({ onClose }: IModalCloseProps) => {
  return (
    <ModalContainer onClose={onClose}>
      <ModalTitle text="Edit column" />
    </ModalContainer>
  );
};
