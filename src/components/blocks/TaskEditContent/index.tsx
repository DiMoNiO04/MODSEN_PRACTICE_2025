import { BtnDef, BtnsBlock, Form, ICardProps, Input, ModalTitle, TextArea } from '@/components/ui';
import { Select } from '@/components/ui/Select';
import { CARD_PRIORITY, CARD_STATUS, UITexts } from '@/constants';
import { useForm } from '@/hooks';
import { IFormDataTask, IOption } from '@/utils';

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

  const onPriorityChange = (selectedOption: IOption) =>
    handleChange({ target: { name: 'priority', value: selectedOption } });

  const onStatusChange = (selectedOption: IOption) =>
    handleChange({ target: { name: 'status', value: selectedOption } });

  return (
    <>
      <ModalTitle text={UITexts.TASK.EDIT} />
      <Form onSubmit={handleSubmit}>
        <Input labelText={UITexts.LABELS.NAME} name="name" type="text" value={formData.name} onChange={handleChange} />
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
        <Select
          labelText={UITexts.LABELS.STATUS}
          value={formData.status}
          onChange={onStatusChange}
          options={Object.values(CARD_STATUS)}
        />
        <BtnsBlock>
          <BtnDef text={UITexts.TASK.INFO} typeBtn={'button'} onClick={handleCancel} isInvert />
          <BtnDef text={UITexts.BTNS.SAVE} typeBtn={'submit'} />
        </BtnsBlock>
      </Form>
    </>
  );
};
