import { IText } from '@/utils/interfaces';
import { Text } from './styled';

interface ITextDefProps extends IText {
  maxLines?: number;
}

export const TextDef = ({ text, maxLines }: ITextDefProps) => {
  return <Text $maxLines={maxLines}>{text}</Text>;
};
