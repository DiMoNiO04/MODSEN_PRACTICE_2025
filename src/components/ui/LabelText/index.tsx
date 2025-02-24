import { RequiredText } from '../RequiredTxt';
import { Text } from './styled';

interface ILabelProps {
  text: string;
  required?: boolean;
}

export const LabelText = ({ text, required }: ILabelProps) => {
  return (
    <Text>
      {text}
      {required && <RequiredText />}
    </Text>
  );
};
