import { useState } from 'react';
import { ItemHash } from '../ui';
import { ModalAddTask } from '../modals';
import { Button } from './styled';

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
