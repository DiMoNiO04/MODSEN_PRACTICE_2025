import { InputInp, Label, LabelText, RequiredText } from './styled';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

export const Input = ({ labelText, required = false, ...props }: IInputProps) => (
  <Label>
    <LabelText>
      {labelText}
      {required && <RequiredText>*</RequiredText>}
    </LabelText>
    <InputInp required={required} autoComplete="off" {...props} />
  </Label>
);
