import { useEffect, useState } from 'react';

import { ModalContainer } from '@/components/layout';
import { BtnDef, Form, Input, ModalTitle } from '@/components/ui';
import { EColors, UITexts } from '@/constants';
import { useColumnActions, useForm } from '@/hooks';
import { closeModalColumnEdit } from '@/store/modalColumnEdit/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { getErrorMessage } from '@/utils/functions';
import { IColumnWithoutCardIds } from '@/utils/interfaces';

export const ModalEditColumn = () => {
  const dispatch = useAppDispatch();
  const { id, title, color, isOpen } = useAppSelector(({ modals }) => modals.modalColumnEdit);

  const initialData: IColumnWithoutCardIds = { id, title, color };

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const { handleEditColumn } = useColumnActions();

  const onClose = () => {
    dispatch(closeModalColumnEdit());
    resetForm();
    setIsSubmitted(false);
  };

  const onSubmit = () => {
    setIsSubmitted(true);
    handleEditColumn(formData, id);
    onClose();
  };

  const { formData, handleChange, handleSubmit, resetForm, setFormData } = useForm<IColumnWithoutCardIds>({
    initialData,
    onSubmit,
  });

  useEffect(() => {
    if (isOpen) {
      setFormData(initialData);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ModalContainer onClose={onClose}>
      <ModalTitle text={UITexts.COLUMN.EDIT} />
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
          value={formData.color || EColors.BLACK}
          onChange={handleChange}
        />
        <BtnDef text={UITexts.BTNS.SAVE} typeBtn="submit" />
      </Form>
    </ModalContainer>
  );
};
