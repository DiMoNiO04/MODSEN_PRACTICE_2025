import { useState } from 'react';

interface IUseFormProps<T> {
  initialData: T;
  onClose: () => void;
  onSubmit?: (data: T) => void;
}

export const useForm = <T,>({ initialData, onClose, onSubmit }: IUseFormProps<T>) => {
  const [formData, setFormData] = useState<T>(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    onClose();
  };

  return { formData, handleChange, handleSubmit };
};
