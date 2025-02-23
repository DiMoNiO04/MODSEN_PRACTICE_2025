import { ModalContainer } from '@/components/layout';
import { BtnDef, Form, Input, ModalTitle } from '@/components/ui';
import { getRandomColor, IModalCloseProps } from '@/utils';
import { useColumnForm } from '@/hooks/useColumnForm';
import { IFormDataColumn } from '@/utils/interfaces';

export const ModalAddColumn = ({ onClose }: IModalCloseProps) => {
  const initialData: IFormDataColumn = { name: '', color: getRandomColor() };
  const { formData, handleChange, handleSubmit } = useColumnForm({ initialData, onClose });

  return (
    <ModalContainer onClose={onClose}>
      <ModalTitle text="Add new column" />
      <Form onSubmit={handleSubmit}>
        <Input labelText="Name column" name="name" type="text" value={formData.name} onChange={handleChange} required />
        <Input labelText="Color column" name="color" type="color" value={formData.color} onChange={handleChange} />
        <BtnDef text="Save" typeBtn="submit" />
      </Form>
    </ModalContainer>
  );
};
