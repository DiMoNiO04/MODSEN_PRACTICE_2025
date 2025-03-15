import { ModalContainer } from '@/components/layout';
import { BtnDef, BtnsBlock, ModalTitle } from '@/components/ui';
import { UITexts } from '@/constants';
import { closeModalConfirm } from '@/store/modalConfirm/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';

export const ModalConfirm = () => {
  const dispatch = useAppDispatch();
  const { isOpen, text, onConfirm } = useAppSelector(({ modals }) => modals.modalConfirm);

  const handleClose = () => dispatch(closeModalConfirm());
  const handleSubmit = () => {
    if (onConfirm) {
      onConfirm();
    }
    handleClose();
  };

  if (!text || !isOpen) return null;

  return (
    <ModalContainer onClose={handleClose}>
      <ModalTitle text={text} />
      <BtnsBlock>
        <BtnDef text={UITexts.BTNS.NO} typeBtn={'button'} onClick={handleClose} />
        <BtnDef text={UITexts.BTNS.YES} typeBtn={'button'} onClick={handleSubmit} isInvert />
      </BtnsBlock>
    </ModalContainer>
  );
};
