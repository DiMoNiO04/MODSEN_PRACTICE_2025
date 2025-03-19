import { useState } from 'react';

import { ModalContainer } from '@/components/layout';
import { BtnDef, Form, Input, ModalTitle } from '@/components/ui';
import { UITexts } from '@/constants';
import { useColumnActions, useForm } from '@/hooks';
import { closeModaColumnAdd } from '@/store/modalColumnAdd/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { getErrorMessage } from '@/utils/functions';
import { IColumnWithoutCardIds } from '@/utils/interfaces';

export const ModalAddColumn = () => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector(({ modals }) => modals.modalColumnAdd);

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const { handleAddColumn } = useColumnActions();

  const initialData: IColumnWithoutCardIds = { id: `column-${Date.now()}`, title: '', color: '' };

  const onClose = () => {
    dispatch(closeModaColumnAdd());
    resetForm();
    setIsSubmitted(false);
  };

  const onSubmit = () => {
    setIsSubmitted(true);
    handleAddColumn(formData);
    onClose();
  };

  const { formData, handleChange, handleSubmit, resetForm } = useForm<IColumnWithoutCardIds>({
    initialData,
    onSubmit,
  });

  if (!isOpen) return null;

  return (
    <ModalContainer onClose={onClose}>
      <ModalTitle text={UITexts.COLUMN.ADD_NEW} />
      <Form onSubmit={handleSubmit}>
        <Input
          labelText={UITexts.LABELS.NAME}
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          required
          errorMessage={getErrorMessage(isSubmitted, formData.title)}
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
