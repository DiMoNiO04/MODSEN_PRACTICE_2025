import { getOpacityColor } from '@/utils';
import styled from 'styled-components';

const Text = styled.div<{ color: string; isLevel?: boolean }>`
  border-radius: 32px;
  padding: 4px 8px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  width: fit-content;
  color: ${({ color }) => color};
  background: ${({ color }) => getOpacityColor(color, 10)};
  margin-bottom: ${({ isLevel }) => (isLevel ? '12px' : '0')};
`;

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
