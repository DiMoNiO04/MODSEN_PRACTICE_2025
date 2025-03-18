import { useEffect, useState } from 'react';

import { ModalContainer } from '@/components/layout';
import { BtnDef, Form, Input, ModalTitle } from '@/components/ui';
import { UITexts } from '@/constants';
import { useForm } from '@/hooks';
import { setKanbanBoardData } from '@/store/kanbanBoard/actions';
import { closeModalColumnEdit } from '@/store/modalColumnEdit/actions';
import { openNotification } from '@/store/notification/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { IColumnWithoutCardIds } from '@/utils/interfaces';

export const ModalEditColumn = () => {
  const dispatch = useAppDispatch();
  const { id, title, color, isOpen } = useAppSelector(({ modals }) => modals.modalColumnEdit);

  const kanbanData = useAppSelector(({ kanbanBoard }) => kanbanBoard.kanbanData);
  const initialData: IColumnWithoutCardIds = { id, title, color };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onClose = () => {
    dispatch(closeModalColumnEdit());
    resetForm();
    setIsSubmitted(false);
  };

  const onSubmit = () => {
    setIsSubmitted(true);

    const trimmedTitle = formData.title.trim();

    if (trimmedTitle === '') {
      dispatch(
        openNotification({
          isSuccess: false,
          text: `Please fill in all required fields`,
        })
      );
      return;
    }

    const isDuplicateTitle = Object.values(kanbanData.columns).some(
      (column) => column.title.toLowerCase() === trimmedTitle.toLowerCase()
    );

    if (isDuplicateTitle) {
      dispatch(
        openNotification({
          isSuccess: false,
          text: `Column with the name '${trimmedTitle}' already exists`,
        })
      );
      return;
    }

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
      columnsOrder: kanbanData.columnsOrder,
    };

    dispatch(setKanbanBoardData(updatedKanbanData));

    dispatch(
      openNotification({
        isSuccess: true,
        text: `Column '${formData.title}' has been successfully edited`,
      })
    );
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
          errorMessage={isSubmitted && formData.title.trim() === '' ? 'This field is required' : undefined}
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
