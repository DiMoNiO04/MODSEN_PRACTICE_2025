import { ModalContainer } from '@/components/layout';
import { BtnDef, BtnsBlock, ModalTitle } from '@/components/ui';
import { UITexts } from '@/constants';
import { useColumnActions } from '@/hooks';
import { closeModalColumnDelete } from '@/store/modalColumnDelete/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';

export const ModalColumnDelete = () => {
  const dispatch = useAppDispatch();
  const { isOpen, id } = useAppSelector(({ modals }) => modals.modalColumnDelete);

  const { handleDeleteColumn } = useColumnActions();

  const handleClose = () => dispatch(closeModalColumnDelete());

  const handleSubmit = () => {
    handleDeleteColumn(id);
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <ModalContainer onClose={handleClose}>
      <ModalTitle text={UITexts.COLUMN.CONFIRM_DELETE} />
      <BtnsBlock>
        <BtnDef text={UITexts.BTNS.NO} typeBtn={'button'} onClick={handleClose} />
        <BtnDef text={UITexts.BTNS.YES} typeBtn={'button'} onClick={handleSubmit} isInvert />
      </BtnsBlock>
    </ModalContainer>
  );
};
