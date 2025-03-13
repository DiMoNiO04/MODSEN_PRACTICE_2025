import { useEffect } from 'react';

import { ModalContainer } from '@/components/layout';
import { BtnDef, Form, Input, ModalTitle, Select, TextArea } from '@/components/ui';
import { CARD_PRIORITY, CARD_STATUS, UITexts } from '@/constants';
import { useForm } from '@/hooks';
import { closeModalTaskAdd } from '@/store/modalTaskAdd/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { IFormDataTask, IOption } from '@/utils';

export const ModalAddTask = () => {
  const dispatch = useAppDispatch();
  const { isFromHeader, status, isOpen } = useAppSelector(({ modals }) => modals.modalTaskAdd);
  const onClose = () => {
    dispatch(closeModalTaskAdd());
    resetForm();
  };

  const initialData: IFormDataTask = {
    name: '',
    description: '',
    priority: CARD_PRIORITY.null,
    status: status || CARD_STATUS.toDo,
  };

  const { formData, handleChange, handleSubmit, resetForm, setFormData } = useForm<IFormDataTask>({
    initialData,
    onClose,
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
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextArea
          labelText={UITexts.LABELS.DESCRIPTION}
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <Select
          labelText={UITexts.LABELS.PRIORITY}
          value={formData.priority}
          onChange={onPriorityChange}
          options={Object.values(CARD_PRIORITY)}
        />

        {isFromHeader && (
          <Select
            labelText={UITexts.LABELS.STATUS}
            value={formData.status}
            onChange={onStatusChange}
            options={Object.values(CARD_STATUS)}
          />
        )}
        <BtnDef text={UITexts.BTNS.SAVE} typeBtn="submit" />
      </Form>
    </ModalContainer>
  );
};
