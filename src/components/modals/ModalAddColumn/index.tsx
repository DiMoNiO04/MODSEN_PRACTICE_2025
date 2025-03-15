import { ModalContainer } from '@/components/layout';
import { BtnDef, Form, Input, ModalTitle } from '@/components/ui';
import { UITexts } from '@/constants';
import { useForm } from '@/hooks';
import { closeModaColumnAdd } from '@/store/modalColumnAdd/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { getRandomColor, IFormDataColumn } from '@/utils';

export const ModalAddColumn = () => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector(({ modals }) => modals.modalColumnAdd);

  const onClose = () => {
    dispatch(closeModaColumnAdd());
    resetForm();
  };

  const initialData: IFormDataColumn = { id: `column-${Date.now()}`, name: '', color: getRandomColor() };
  const { formData, handleChange, handleSubmit, resetForm } = useForm<IFormDataColumn>({
    initialData,
    onClose,
  });

  if (!isOpen) return null;

  return (
    <ModalContainer onClose={onClose}>
      <ModalTitle text={UITexts.COLUMN.ADD_NEW} />
      <Form onSubmit={handleSubmit}>
        <Input
          labelText={UITexts.LABELS.NAME}
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          labelText={UITexts.LABELS.COLOR}
          name="color"
          type="color"
          value={formData.color}
          onChange={handleChange}
        />
        <BtnDef text={UITexts.BTNS.SAVE} typeBtn="submit" />
      </Form>
    </ModalContainer>
  );
};
