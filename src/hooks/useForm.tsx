import { useState } from 'react';

import { IOption } from '@/utils';

interface IUseFormProps<T> {
  initialData: T;
  onClose: () => void;
  onSubmit?: (data: T) => void;
}

export const useForm = <T,>({ initialData, onClose, onSubmit }: IUseFormProps<T>) => {
  const [formData, setFormData] = useState<T>(initialData);

  const handleChange = (e: { target: { name: string; value: IOption | string } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    if (onSubmit) {
      onSubmit(formData);
    }
    onClose();
  };

  return { formData, handleChange, handleSubmit };
};
