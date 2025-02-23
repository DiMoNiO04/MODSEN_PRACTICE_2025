import { Label } from '../Label';
import { LabelText } from '../LabelText';
import { SelectInp } from './styled';

interface ISelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  labelText: string;
  options: { value: string; label: string }[];
}

export const Select = ({ labelText, required = false, options, ...props }: ISelectProps) => (
  <Label>
    <LabelText text={labelText} required={required} />
    <SelectInp required={required} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </SelectInp>
  </Label>
);
