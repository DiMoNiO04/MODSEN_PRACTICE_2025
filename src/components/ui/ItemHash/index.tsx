import { Text } from './styled';

interface IItemHashProps {
  color: string;
  text?: string;
  isLevel?: boolean;
}

export const ItemHash = ({ color, text, isLevel }: IItemHashProps) => {
  return text ? (
    <Text color={color} isLevel={isLevel}>
      {text}
    </Text>
  ) : null;
};
