import { ModalContainer } from '@/components/layout';
import { BtnDef, ModalTitle } from '@/components/ui';
import { IModalCloseProps } from '@/utils';
import { Btns } from './styled';

interface IModalConfirm extends IModalCloseProps {
  text: string;
  handleYes: () => void;
}

export const ModalConfirm = ({ text, onClose, handleYes }: IModalConfirm) => {
  return (
    <ModalContainer onClose={onClose}>
      <ModalTitle text={text} />
      <Btns>
        <BtnDef text={'No'} typeBtn={'button'} onClick={onClose} isInvert />
        <BtnDef text={'Yes'} typeBtn={'button'} onClick={handleYes} />
      </Btns>
    </ModalContainer>
  );
};
