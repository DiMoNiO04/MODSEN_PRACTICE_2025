import { getOpacityColor } from '@/utils/getOpacityColor';
import styled from 'styled-components';

const Button = styled.button<{ color: string }>`
  background: #ffffff;
  padding: 12px;
  border-radius: 32px;
  border: 1px solid #e2e8f0;
  box-shadow: 0px 2px 4px -2px #1717170f;
  cursor: pointer;
  transition: background 0.2s ease;

  @media (any-hover: hover) {
    &:hover {
      background: ${(props) => getOpacityColor(props.color)};
    }
  }
`;

const Text = styled.div<{ color: string }>`
  border-radius: 32px;
  padding: 4px 8px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  width: fit-content;
  color: ${(props) => props.color};
  background: ${(props) => getOpacityColor(props.color)};
`;

interface ITodoColumnTaskAddProps {
  color: string;
}

export const TodoColumnTaskAdd = ({ color }: ITodoColumnTaskAddProps) => {
  return (
    <Button type="button" color={color}>
      <Text color={color}>Add task...</Text>
    </Button>
  );
};
