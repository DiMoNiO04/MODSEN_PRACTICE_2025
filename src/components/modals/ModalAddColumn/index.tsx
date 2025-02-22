import { useState } from 'react';
import { ModalContainer } from '@/components/layout';
import { BtnDef, Form, Input, ModalTitle } from '@/components/ui';
import { getRandomColor, IModalCloseProps } from '@/utils';

interface IFormDataAddColumn {
  name: string;
  color?: string;
}

export const ModalAddColumn = ({ onClose }: IModalCloseProps) => {
  const [formData, setFormData] = useState<IFormDataAddColumn>({ name: '', color: getRandomColor() });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`${formData.name}\n${formData?.color}`);
    onClose();
  };

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
