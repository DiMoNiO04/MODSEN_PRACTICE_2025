import { useState } from 'react';

import { BtnDef, BtnsBlock, Form, Input, ModalTitle, TextArea } from '@/components/ui';
import { Select } from '@/components/ui/Select';
import { CARD_PRIORITY, UITexts } from '@/constants';
import { useForm, useTaskActions } from '@/hooks';
import { useAppSelector } from '@/store/store';
import { getErrorMessage } from '@/utils/functions';
import { ICard, IOption } from '@/utils/interfaces';

interface ITaskEditContentProps {
  cardData: ICard;
  handleCancel: () => void;
  onClose: () => void;
}

export const TaskEditContent = ({ cardData, handleCancel, onClose }: ITaskEditContentProps) => {
  const initialData: ICard = { ...cardData };
  const { kanbanData } = useAppSelector(({ kanbanBoard }) => kanbanBoard);

  const { formData, handleChange, handleSubmit } = useForm<ICard>({ initialData });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const { handleEditTask } = useTaskActions();

  const handleClose = () => {
    onClose();
    setIsSubmitted(false);
  };

  const onSubmit = () => {
    setIsSubmitted(true);
    handleEditTask(formData);
    handleClose();
  };

  const onPriorityChange = (selectedOption: IOption) =>
    handleChange({ target: { name: 'priority', value: selectedOption.id } });

  const onStatusChange = (selectedOption: IOption) =>
    handleChange({ target: { name: 'columnId', value: selectedOption.id } });

  return (
    <>
      <ModalTitle text={UITexts.TASK.EDIT} />
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
          options={Object.values(CARD_PRIORITY)}
        />
        <Select
          labelText={UITexts.LABELS.STATUS}
          value={formData.columnId}
          onChange={onStatusChange}
          options={Object.values(kanbanData.columns).map((column) => ({
            id: column.id,
            title: column.title,
          }))}
        />
        <BtnsBlock>
          <BtnDef text={UITexts.TASK.INFO} typeBtn={'button'} onClick={handleCancel} isInvert />
          <BtnDef text={UITexts.BTNS.SAVE} typeBtn={'submit'} onClick={onSubmit} />
        </BtnsBlock>
      </Form>
    </>
  );
};
