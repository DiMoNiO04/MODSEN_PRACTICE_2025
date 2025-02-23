import { IFormDataColumn } from '@/utils/interfaces';
import { useState } from 'react';

interface IUseFormColumnProps {
  initialData: IFormDataColumn;
  onClose: () => void;
}

export const useColumnForm = ({ initialData, onClose }: IUseFormColumnProps) => {
  const [formData, setFormData] = useState<IFormDataColumn>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`${formData.name}\n${formData.color}`);
    onClose();
  };

  return { formData, handleChange, handleSubmit };
};
