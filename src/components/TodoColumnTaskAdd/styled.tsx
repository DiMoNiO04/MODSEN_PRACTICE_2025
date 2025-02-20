import styled from 'styled-components';
import { getOpacityColor } from '@/utils/getOpacityColor';
import { ItemHash } from '../ui';
import { useState } from 'react';
import { ModalAddTask } from '../modals';

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
      background: ${({ color }) => getOpacityColor(color, 10)};
    }
  }
`;

interface ITodoColumnTaskAddProps {
  color: string;
}

export const TodoColumnTaskAdd = ({ color }: ITodoColumnTaskAddProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModalOpen = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <Button type="button" color={color} onClick={toggleModalOpen}>
        <ItemHash color={color} text="Add task..." />
      </Button>
      {isModalOpen && <ModalAddTask onClose={toggleModalOpen} />}
    </>
  );
};
