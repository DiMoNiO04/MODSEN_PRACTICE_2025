import { useState } from 'react';
import { ModalAddTask } from '../modals';
import { Button } from './styled';
import { ColorText } from '../ui';
import { IOption } from '@/utils';

interface ITodoColumnTaskAddProps {
  status: IOption;
}

export const TodoColumnTaskAdd = ({ status }: ITodoColumnTaskAddProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModalOpen = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <Button type="button" color={status.color} onClick={toggleModalOpen}>
        <ColorText color={status.color} text="Add task..." />
      </Button>
      {isModalOpen && <ModalAddTask onClose={toggleModalOpen} status={status} />}
    </>
  );
};
