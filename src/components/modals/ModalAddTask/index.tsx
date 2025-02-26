import { ModalContainer } from '@/components/layout';
import { BtnDef, Form, Input, ModalTitle, Select, TextArea } from '@/components/ui';
import { CARD_PRIORITY, CARD_STATUS, UITexts } from '@/constants';
import { useForm } from '@/hooks';
import { IFormDataTask, IModalCloseProps, IOption } from '@/utils';

interface IModalAddTaskProps extends IModalCloseProps {
  isFromHeader?: boolean;
  status?: IOption;
}

export const ModalAddTask = ({ onClose, isFromHeader = false, status }: IModalAddTaskProps) => {
  const initialData: IFormDataTask = {
    name: '',
    description: '',
    priority: CARD_PRIORITY.null,
    status: status || CARD_STATUS.toDo,
  };

  const { formData, handleChange, handleSubmit } = useForm<IFormDataTask>({ initialData, onClose });

  const onPriorityChange = (selectedOption: IOption) =>
    handleChange({ target: { name: 'priority', value: selectedOption } });

  const onStatusChange = (selectedOption: IOption) =>
    handleChange({ target: { name: 'status', value: selectedOption } });

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
