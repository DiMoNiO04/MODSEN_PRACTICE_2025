import { useForm } from '@/hooks';
import { BtnDef, BtnsBlock, Form, ICardProps, Input, ModalTitle, TextArea } from '../ui';
import { Select } from '../ui/Select';
import { IFormDataTask } from '@/utils/interfaces';
import { CARD_PRIORITY, CARD_STATUS } from '@/utils';

interface ITaskEditContentProps {
  cardData: ICardProps;
  handleCancel: () => void;
  onClose: () => void;
}

export const TaskEditContent = ({ cardData, handleCancel, onClose }: ITaskEditContentProps) => {
  const { title, desc, priority, status } = cardData;

  const initialData: IFormDataTask = {
    name: title,
    description: desc,
    priority: priority,
    status: status,
  };

  const { formData, handleChange, handleSubmit } = useForm<IFormDataTask>({ initialData, onClose });

  return (
    <>
      <ModalTitle text={'Edit Task'} />
      <Form onSubmit={handleSubmit}>
        <Input labelText={'Name Task'} name="name" type="text" value={formData.name} onChange={handleChange} />
        <TextArea
          labelText={'Description Task'}
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <Select
          labelText="Priority"
          value={formData.priority}
          onChange={(selectedOption) => handleChange({ target: { name: 'priority', value: selectedOption } })}
          options={Object.values(CARD_PRIORITY)}
        />
        <Select
          labelText="Status"
          value={formData.status}
          onChange={(selectedOption) => handleChange({ target: { name: 'status', value: selectedOption } })}
          options={Object.values(CARD_STATUS)}
        />
        <BtnsBlock>
          <BtnDef text={'Info Task'} typeBtn={'button'} onClick={handleCancel} isInvert />
          <BtnDef text={'Save'} typeBtn={'submit'} />
        </BtnsBlock>
      </Form>
    </>
  );
};
