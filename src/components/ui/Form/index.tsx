import { FormEvent } from 'react';

import { IChildrenProps } from '@/utils/interfaces';

import { FormContainer } from './styled';

interface IFormProps extends IChildrenProps {
  onSubmit: (e: FormEvent) => void;
}

export const Form = ({ children, onSubmit }: IFormProps) => {
  return <FormContainer onSubmit={onSubmit}>{children}</FormContainer>;
};
