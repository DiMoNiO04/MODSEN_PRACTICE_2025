import { ModalContainer } from '@/components/layout';
import { BtnDef, BtnsBlock, ModalTitle } from '@/components/ui';
import { UITexts } from '@/constants';
import { toggleModalConfirm } from '@/store/modalConfirm/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';

export const ModalConfirm = () => {
  const dispatch = useAppDispatch();
  const { isOpen, text, onConfirm } = useAppSelector(({ modals }) => modals.modalConfirm);
  const onClose = () => dispatch(toggleModalConfirm({ text, onConfirm }));

  if (!text || !isOpen) return null;

  return (
    <ModalContainer onClose={onClose}>
      <ModalTitle text={text} />
      <BtnsBlock>
        <BtnDef text={UITexts.BTNS.NO} typeBtn={'button'} onClick={onClose} />
        <BtnDef text={UITexts.BTNS.YES} typeBtn={'button'} onClick={onConfirm} isInvert />
      </BtnsBlock>
    </ModalContainer>
  );
};
