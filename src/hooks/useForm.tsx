import { FormEvent, useState } from 'react';

import { IOption } from '@/utils';

interface IUseFormProps<T> {
  initialData: T;
  onSubmit?: (data: T) => void;
}

interface IUseFormReturn<T> {
  formData: T;
  handleChange: (e: { target: { name: string; value: IOption | string } }) => void;
  handleSubmit: (e: FormEvent) => void;
  resetForm: () => void;
  setFormData: React.Dispatch<React.SetStateAction<T>>;
}

export const useForm = <T,>({ initialData, onSubmit }: IUseFormProps<T>): IUseFormReturn<T> => {
  const [formData, setFormData] = useState<T>(initialData);

  const handleChange = (e: { target: { name: string; value: IOption | string } }): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const resetForm = (): void => setFormData(initialData);

  return { formData, handleChange, handleSubmit, resetForm, setFormData };
};
