import { ModalContainer } from '@/components/layout';
import { BtnDef, BtnsBlock, ModalTitle } from '@/components/ui';
import { UITexts } from '@/constants';
import { IModalCloseProps } from '@/utils';

interface IModalConfirm extends IModalCloseProps {
  text: string;
  handleYes: () => void;
}

export const ModalConfirm = ({ text, onClose, handleYes }: IModalConfirm) => {
  return (
    <ModalContainer onClose={onClose}>
      <ModalTitle text={text} />
      <BtnsBlock>
        <BtnDef text={UITexts.BTNS.NO} typeBtn={'button'} onClick={onClose} />
        <BtnDef text={UITexts.BTNS.YES} typeBtn={'button'} onClick={handleYes} isInvert />
      </BtnsBlock>
    </ModalContainer>
  );
};
