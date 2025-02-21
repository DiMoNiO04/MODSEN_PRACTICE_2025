import { useState } from 'react';
import { ModalAddTask } from '../modals';
import { Button } from './styled';
import { ColorText } from '../ui';

interface ITodoColumnTaskAddProps {
  color: string;
}

export const TodoColumnTaskAdd = ({ color }: ITodoColumnTaskAddProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModalOpen = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <Button type="button" color={color} onClick={toggleModalOpen}>
        <ColorText color={color} text="Add task..." />
      </Button>
      {isModalOpen && <ModalAddTask onClose={toggleModalOpen} />}
    </>
  );
};
