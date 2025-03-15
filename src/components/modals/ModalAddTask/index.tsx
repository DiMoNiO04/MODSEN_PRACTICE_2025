import { useEffect } from 'react';

import { ModalContainer } from '@/components/layout';
import { BtnDef, Form, Input, ModalTitle, Select, TextArea } from '@/components/ui';
import { CARD_PRIORITY, UITexts } from '@/constants';
import { useForm } from '@/hooks';
import { setKanbanBoardData } from '@/store/kanbanBoard/actions';
import { closeModalTaskAdd } from '@/store/modalTaskAdd/actions';
import { openNotification } from '@/store/notification/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { IOption } from '@/utils';
import { ICard } from '@/utils/interfaces';

export const ModalAddTask = () => {
  const dispatch = useAppDispatch();
  const { isFromHeader, isOpen, columnId } = useAppSelector(({ modals }) => modals.modalTaskAdd);
  const kanbanData = useAppSelector(({ kanbanBoard }) => kanbanBoard.kanbanData);

  const initialData: ICard = {
    id: `card-${Date.now()}`,
    title: '',
    desc: '',
    priority: 'priority-1',
    columnId: columnId || 'column-1',
  };

  const onClose = () => {
    dispatch(closeModalTaskAdd());
    resetForm();
  };

  const onSubmit = () => {
    const newTask: ICard = {
      ...formData,
    };

    const updatedCards = { ...kanbanData.cards };
    updatedCards[newTask.id] = newTask;

    const updatedColumns = { ...kanbanData.columns };
    updatedColumns[formData.columnId] = {
      ...updatedColumns[formData.columnId],
      cardIds: [...updatedColumns[formData.columnId].cardIds, newTask.id],
    };

    const updatedKanbanData = {
      columns: updatedColumns,
      cards: updatedCards,
    };

    dispatch(setKanbanBoardData(updatedKanbanData));

    dispatch(
      openNotification({
        isSuccess: true,
        text: `Task '${formData.title}' has been successfully added`,
      })
    );
  };

  const { formData, handleChange, handleSubmit, resetForm, setFormData } = useForm<ICard>({
    initialData,
    onClose,
    onSubmit,
  });

  useEffect(() => {
    if (isOpen) {
      setFormData(initialData);
    }
  }, [isOpen, status]);

  const onPriorityChange = (selectedOption: IOption) =>
    handleChange({ target: { name: 'priority', value: selectedOption.id } });

  const onStatusChange = (selectedOption: IOption) =>
    handleChange({ target: { name: 'columnId', value: selectedOption.id } });

  if (!isOpen) return null;

  return (
    <ModalContainer onClose={onClose}>
      <ModalTitle text={UITexts.TASK.ADD_NEW} />
      <Form onSubmit={handleSubmit}>
        <Input
          labelText={UITexts.LABELS.NAME}
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <TextArea labelText={UITexts.LABELS.DESCRIPTION} name="desc" value={formData.desc} onChange={handleChange} />
        <Select
          labelText={UITexts.LABELS.PRIORITY}
          value={formData.priority}
          onChange={onPriorityChange}
          options={Object.values(CARD_PRIORITY)}
        />

        {isFromHeader && (
          <Select
            labelText={UITexts.LABELS.STATUS}
            value={formData.columnId}
            onChange={onStatusChange}
            options={Object.values(kanbanData.columns).map((column) => ({
              id: column.id,
              title: column.title,
            }))}
          />
        )}

        <BtnDef text={UITexts.BTNS.SAVE} typeBtn="submit" />
      </Form>
    </ModalContainer>
  );
};
