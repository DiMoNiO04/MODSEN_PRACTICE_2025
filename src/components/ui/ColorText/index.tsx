import { Text } from './styled';

interface IColorTextProps {
  color: string;
  text: string;
  isFullWidth?: boolean;
}

export const ColorText = ({ color, text, isFullWidth }: IColorTextProps) => {
  return (
    <Text color={color} isFullWidth={isFullWidth}>
      {text ? text : '—'}
    </Text>
  );
};
