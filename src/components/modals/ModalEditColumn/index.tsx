import { useEffect } from 'react';

import { ModalContainer } from '@/components/layout';
import { BtnDef, Form, Input, ModalTitle } from '@/components/ui';
import { UITexts } from '@/constants';
import { useForm } from '@/hooks';
import { setKanbanBoardData } from '@/store/kanbanBoard/actions';
import { closeModalColumnEdit } from '@/store/modalColumnEdit/actions';
import { openNotification } from '@/store/notification/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { IFormDataColumn } from '@/utils';

export const ModalEditColumn = () => {
  const dispatch = useAppDispatch();
  const { id, title, color, isOpen } = useAppSelector(({ modals }) => modals.modalColumnEdit);

  const kanbanData = useAppSelector(({ kanbanBoard }) => kanbanBoard.kanbanData);
  const initialData: IFormDataColumn = { id, title, color };

  const onClose = () => {
    dispatch(closeModalColumnEdit());
    resetForm();
  };

  const onSubmit = () => {
    const updateColumn = {
      ...formData,
      id,
      cardIds: kanbanData.columns[id].cardIds,
    };

    const updatedColums = {
      ...kanbanData.columns,
      [updateColumn.id]: updateColumn,
    };

    const updatedKanbanData = {
      columns: updatedColums,
      cards: kanbanData.cards,
    };

    dispatch(setKanbanBoardData(updatedKanbanData));

    dispatch(
      openNotification({
        isSuccess: true,
        text: `Column '${formData.title}' has been successfully edited`,
      })
    );
  };

  const { formData, handleChange, handleSubmit, resetForm, setFormData } = useForm<IFormDataColumn>({
    initialData,
    onClose,
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
        />
        <Input
          labelText={UITexts.LABELS.COLOR}
          name="color"
          type="color"
          value={formData.color || '#000000'}
          onChange={handleChange}
        />
        <BtnDef text={UITexts.BTNS.SAVE} typeBtn="submit" />
      </Form>
    </ModalContainer>
  );
};
