import { ModalContainer } from '@/components/layout';
import { BtnDef, Form, Input, ModalTitle } from '@/components/ui';
import { UITexts } from '@/constants';
import { useForm } from '@/hooks';
import { IFormDataColumn, IModalCloseProps } from '@/utils';

interface IModalEditColumnProps extends IModalCloseProps, IFormDataColumn {}

export const ModalEditColumn = ({ onClose, name, color }: IModalEditColumnProps) => {
  const initialData: IFormDataColumn = { name, color };
  const { formData, handleChange, handleSubmit } = useForm<IFormDataColumn>({ initialData, onClose });

  return (
    <ModalContainer onClose={onClose}>
      <ModalTitle text={UITexts.COLUMN.EDIT} />
      <Form onSubmit={handleSubmit}>
        <Input
          labelText={UITexts.LABELS.NAME}
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          labelText={UITexts.LABELS.COLOR}
          name="color"
          type="color"
          value={formData.color}
          onChange={handleChange}
        />
        <BtnDef text={UITexts.BTNS.SAVE} typeBtn="submit" />
      </Form>
    </ModalContainer>
  );
};
