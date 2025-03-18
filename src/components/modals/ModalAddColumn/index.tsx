import { useState } from 'react';

import { ModalContainer } from '@/components/layout';
import { BtnDef, Form, Input, ModalTitle } from '@/components/ui';
import { UITexts } from '@/constants';
import { useForm } from '@/hooks';
import { setKanbanBoardData } from '@/store/kanbanBoard/actions';
import { closeModaColumnAdd } from '@/store/modalColumnAdd/actions';
import { openNotification } from '@/store/notification/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { getRandomColor, IFormDataColumn } from '@/utils';

export const ModalAddColumn = () => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector(({ modals }) => modals.modalColumnAdd);
  const kanbanData = useAppSelector(({ kanbanBoard }) => kanbanBoard.kanbanData);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const initialData: IFormDataColumn = { id: `column-${Date.now()}`, title: '', color: getRandomColor() };

  const onClose = () => {
    dispatch(closeModaColumnAdd());
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

    const newColumn = {
      ...formData,
      id: `column-${Date.now()}`,
      cardIds: [],
    };

    const updatedKanbanData = {
      columns: {
        ...kanbanData.columns,
        [newColumn.id]: newColumn,
      },
      cards: kanbanData.cards,
      columnsOrder: [...kanbanData.columnsOrder, newColumn.id],
    };

    dispatch(setKanbanBoardData(updatedKanbanData));

    dispatch(
      openNotification({
        isSuccess: true,
        text: `Column '${trimmedTitle}' has been successfully added`,
      })
    );

    onClose();
  };

  const { formData, handleChange, handleSubmit, resetForm } = useForm<IFormDataColumn>({
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
          errorMessage={isSubmitted && formData.title.trim() === '' ? 'This field is required' : undefined}
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
