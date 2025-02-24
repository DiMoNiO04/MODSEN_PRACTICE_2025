import { Label } from '../Label';
import { LabelText } from '../LabelText';
import { InputField } from './styled';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

export const Input = ({ labelText, required = false, ...props }: IInputProps) => (
  <Label>
    <LabelText text={labelText} required={required} />
    <InputField required={required} autoComplete="off" {...props} />
  </Label>
);
