import { IChildrenProps } from '@/utils';
import { FormContainer } from './styled';

interface IFormProps extends IChildrenProps {
  onSubmit: (e: React.FormEvent) => void;
}

export const Form = ({ children, onSubmit }: IFormProps) => {
  return <FormContainer onSubmit={onSubmit}>{children}</FormContainer>;
};
