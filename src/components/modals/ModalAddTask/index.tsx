import { ModalContainer } from '@/components/layout';
import { BtnDef, Form, Input, ModalTitle, TextArea } from '@/components/ui';
import { Select } from '@/components/ui/Select';
import { CARD_PRIORITY, CARD_STATUS } from '@/constants';
import { useForm } from '@/hooks';
import { IModalCloseProps } from '@/utils';
import { IFormDataTask, IOption } from '@/utils/interfaces';

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
      <ModalTitle text="Add new task" />
      <Form onSubmit={handleSubmit}>
        <Input labelText="Task Name" name="name" type="text" value={formData.name} onChange={handleChange} required />
        <TextArea
          labelText="Task Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <Select
          labelText="Priority"
          value={formData.priority}
          onChange={onPriorityChange}
          options={Object.values(CARD_PRIORITY)}
        />

        {isFromHeader && (
          <Select
            labelText="Status"
            value={formData.status}
            onChange={onStatusChange}
            options={Object.values(CARD_STATUS)}
          />
        )}
        <BtnDef text="Save" typeBtn="submit" />
      </Form>
    </ModalContainer>
  );
};
