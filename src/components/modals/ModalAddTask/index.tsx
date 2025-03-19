import { useEffect, useState } from 'react';

import { ModalContainer } from '@/components/layout';
import { BtnDef, Form, Input, ModalTitle, Select, TextArea } from '@/components/ui';
import { TASK_PRIORITY, UITexts } from '@/constants';
import { EColumnsName } from '@/constants/kanbanData';
import { EPriorityName } from '@/constants/taskPriority';
import { useForm, useTaskActions } from '@/hooks';
import { closeModalTaskAdd } from '@/store/modalTaskAdd/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { getErrorMessage } from '@/utils/functions';
import { IOption, ITask } from '@/utils/interfaces';

export const ModalAddTask = () => {
  const dispatch = useAppDispatch();

  const { isFromHeader, isOpen, columnId } = useAppSelector(({ modals }) => modals.modalTaskAdd);
  const { kanbanData } = useAppSelector(({ kanbanBoard }) => kanbanBoard);

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const { handleAddTask } = useTaskActions();

  const initialData: ITask = {
    id: `task-${Date.now()}`,
    title: '',
    desc: '',
    priority: EPriorityName.NULL,
    columnId: columnId || EColumnsName.TODO,
  };

  const onClose = () => {
    dispatch(closeModalTaskAdd());
    resetForm();
    setIsSubmitted(false);
  };

  const onSubmit = () => {
    setIsSubmitted(true);
    handleAddTask(formData, onClose);
  };

  const { formData, handleChange, handleSubmit, resetForm, setFormData } = useForm<ITask>({
    initialData,
    onSubmit,
  });

  useEffect(() => {
    if (isOpen) {
      setFormData(initialData);
    }
  }, [isOpen]);

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
          errorMessage={getErrorMessage(isSubmitted, formData.title)}
        />
        <TextArea labelText={UITexts.LABELS.DESCRIPTION} name="desc" value={formData.desc} onChange={handleChange} />
        <Select
          labelText={UITexts.LABELS.PRIORITY}
          value={formData.priority}
          onChange={onPriorityChange}
          options={Object.values(TASK_PRIORITY)}
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
