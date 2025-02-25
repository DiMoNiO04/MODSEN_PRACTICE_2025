import { ModalContainer } from '@/components/layout';
import { BtnDef, Form, Input, ModalTitle } from '@/components/ui';
import { useForm } from '@/hooks';
import { IFormDataColumn, IModalCloseProps } from '@/utils';

interface IModalEditColumnProps extends IModalCloseProps, IFormDataColumn {}

export const ModalEditColumn = ({ onClose, name, color }: IModalEditColumnProps) => {
  const initialData: IFormDataColumn = { name, color };
  const { formData, handleChange, handleSubmit } = useForm<IFormDataColumn>({ initialData, onClose });

  return (
    <ModalContainer onClose={onClose}>
      <ModalTitle text="Edit column" />
      <Form onSubmit={handleSubmit}>
        <Input labelText="Name column" name="name" type="text" value={formData.name} onChange={handleChange} required />
        <Input labelText="Color column" name="color" type="color" value={formData.color} onChange={handleChange} />
        <BtnDef text="Save" typeBtn="submit" />
      </Form>
    </ModalContainer>
  );
};
