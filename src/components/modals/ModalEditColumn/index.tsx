import { ModalContainer } from '@/components/layout';
import { BtnDef, Form, Input, ModalTitle } from '@/components/ui';
import { UITexts } from '@/constants';
import { useForm } from '@/hooks';
import { toggleModaColumnEdit } from '@/store/modalColumnEdit/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { IFormDataColumn } from '@/utils';

export const ModalEditColumn = () => {
  const dispatch = useAppDispatch();
  const { name, color, isOpen } = useAppSelector(({ modals }) => modals.modalColumnEdit);
  const onClose = () => {
    dispatch(toggleModaColumnEdit({ name, color }));
    resetForm();
  };

  const initialData: IFormDataColumn = { name, color };
  const { formData, handleChange, handleSubmit, resetForm } = useForm<IFormDataColumn>({ initialData, onClose });

  if (!isOpen) return null;

  return (
    <ModalContainer onClose={onClose}>
      <ModalTitle text={UITexts.COLUMN.EDIT} />
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
