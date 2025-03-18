import { Label } from '../Label';
import { LabelText } from '../LabelText';
import { ErrorText, InputField } from './styled';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  errorMessage?: string;
}

export const Input = ({ labelText, required = false, errorMessage, ...props }: IInputProps) => (
  <Label>
    <LabelText text={labelText} required={required} />
    <InputField autoComplete="off" $isError={!!errorMessage} {...props} />
    {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
  </Label>
);
