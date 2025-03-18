import { useState } from 'react';

import { ModalContainer } from '@/components/layout';
import { BtnDef, Form, Input, ModalTitle } from '@/components/ui';
import { UITexts } from '@/constants';
import { useForm, useValidation } from '@/hooks';
import { setKanbanBoardData } from '@/store/kanbanBoard/actions';
import { closeModaColumnAdd } from '@/store/modalColumnAdd/actions';
import { openNotification } from '@/store/notification/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { getErrorMessage, getRandomColor } from '@/utils/functions';
import { IColumn, IColumnWithoutCardIds, IKanbanData } from '@/utils/interfaces';

export const ModalAddColumn = () => {
  const dispatch = useAppDispatch();

  const { isOpen } = useAppSelector(({ modals }) => modals.modalColumnAdd);
  const { kanbanData } = useAppSelector(({ kanbanBoard }) => kanbanBoard);

  const { isEmptyField, isDuplicateColumn } = useValidation();

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const initialData: IColumnWithoutCardIds = { id: `column-${Date.now()}`, title: '', color: getRandomColor() };

  const onClose = () => {
    dispatch(closeModaColumnAdd());
    resetForm();
    setIsSubmitted(false);
  };

  const onSubmit = () => {
    setIsSubmitted(true);

    if (isEmptyField(formData.title) || isDuplicateColumn(formData.title)) {
      return;
    }

    const newColumn: IColumn = {
      ...formData,
      id: `column-${Date.now()}`,
      cardIds: [],
    };

    const updatedKanbanData: IKanbanData = {
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
        text: UITexts.NOTIFICATION.SUCCESS_ADD_COLUMN,
      })
    );

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
