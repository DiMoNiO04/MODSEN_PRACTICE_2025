import { ModalContainer } from '@/components/layout';
import { ModalTitle } from '@/components/ui';
import { IModalCloseProps } from '@/utils';

export const ModalAddColumn = ({ onClose }: IModalCloseProps) => {
  return (
    <ModalContainer onClose={onClose}>
      <ModalTitle text="Add new column" />
    </ModalContainer>
  );
};
