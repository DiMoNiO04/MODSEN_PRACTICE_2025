import { useEffect } from 'react';

import { ModalContainer } from '@/components/layout';
import { BtnDef, Form, Input, ModalTitle, Select, TextArea } from '@/components/ui';
import { CARD_PRIORITY, CARD_STATUS, UITexts } from '@/constants';
import { useForm } from '@/hooks';
import { setKanbanBoardData } from '@/store/kanbanBoard/actions';
import { closeModalTaskAdd } from '@/store/modalTaskAdd/actions';
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
    priority: CARD_PRIORITY.null,
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

    const updatedKanbanData = {
      columns: {
        ...kanbanData.columns,
        [formData.columnId]: {
          ...kanbanData.columns[formData.columnId],
          cardIds: [...kanbanData.columns[formData.columnId].cardIds, newTask.id],
        },
      },
      cards: {
        ...kanbanData.cards,
        [newTask.id]: newTask,
      },
    };

    dispatch(setKanbanBoardData(updatedKanbanData));
    onClose();
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
    handleChange({ target: { name: 'priority', value: selectedOption } });

  const onStatusChange = (selectedOption: IOption) =>
    handleChange({ target: { name: 'status', value: selectedOption } });

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
            value={CARD_STATUS.done}
            onChange={onStatusChange}
            options={Object.values(CARD_STATUS)}
          />
        )}
        <BtnDef text={UITexts.BTNS.SAVE} typeBtn="submit" />
      </Form>
    </ModalContainer>
  );
};
