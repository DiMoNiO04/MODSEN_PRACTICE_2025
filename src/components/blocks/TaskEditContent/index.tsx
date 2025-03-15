import { BtnDef, BtnsBlock, Form, Input, ModalTitle, TextArea } from '@/components/ui';
import { Select } from '@/components/ui/Select';
import { CARD_PRIORITY, CARD_STATUS, UITexts } from '@/constants';
import { useForm } from '@/hooks';
import { IOption } from '@/utils';
import { ICard } from '@/utils/interfaces';

interface ITaskEditContentProps {
  cardData: ICard;
  handleCancel: () => void;
  onClose: () => void;
}

export const TaskEditContent = ({ cardData, handleCancel, onClose }: ITaskEditContentProps) => {
  const initialData: ICard = { ...cardData };

  const { formData, handleChange, handleSubmit } = useForm<ICard>({ initialData, onClose });

  const onPriorityChange = (selectedOption: IOption) =>
    handleChange({ target: { name: 'priority', value: selectedOption } });

  const onStatusChange = (selectedOption: IOption) =>
    handleChange({ target: { name: 'status', value: selectedOption } });

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
          value={CARD_STATUS.done}
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
