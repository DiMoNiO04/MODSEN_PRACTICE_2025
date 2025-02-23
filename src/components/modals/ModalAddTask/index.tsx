import { ModalContainer } from '@/components/layout';
import { BtnDef, Form, Input, ModalTitle } from '@/components/ui';
import { Select } from '@/components/ui/Select';
import { useForm } from '@/hooks';
import { CARD_PRIORITY, IModalCloseProps } from '@/utils';
import { IFormDataTask } from '@/utils/interfaces';

export const ModalAddTask = ({ onClose }: IModalCloseProps) => {
  const initialData: IFormDataTask = { name: '', description: '', priority: CARD_PRIORITY.null };
  const { formData, handleChange, handleSubmit } = useForm<IFormDataTask>({ initialData, onClose });

  return (
    <ModalContainer onClose={onClose}>
      <ModalTitle text="Add new task" />
      <Form onSubmit={handleSubmit}>
        <Input labelText="Name task" name="name" type="text" value={formData.name} onChange={handleChange} required />
        <Input
          labelText="Description task"
          name="description"
          type="text"
          value={formData.description}
          onChange={handleChange}
        />
        <Select
          labelText={'Priority'}
          name="priority"
          options={Object.entries(CARD_PRIORITY).map(([_, { value }]) => ({
            value,
            label: value,
          }))}
        />
        <BtnDef text="Save" typeBtn="submit" />
      </Form>
    </ModalContainer>
  );
};
