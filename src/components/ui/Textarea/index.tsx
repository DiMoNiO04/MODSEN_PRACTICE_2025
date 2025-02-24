import { Label } from '../Label';
import { LabelText } from '../LabelText';
import { TextAreaField } from './styled';

interface ITextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  labelText: string;
}

export const TextArea = ({ labelText, required = false, ...props }: ITextAreaProps) => (
  <Label>
    <LabelText text={labelText} required={required} />
    <TextAreaField required={required} autoComplete="off" rows={5} {...props} />
  </Label>
);
