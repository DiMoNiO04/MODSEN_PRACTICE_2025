import { ModalContainer } from '@/components/layout';
import { BtnDef, Form, Input, ModalTitle, Select, TextArea } from '@/components/ui';
import { CARD_PRIORITY, CARD_STATUS } from '@/constants';
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
