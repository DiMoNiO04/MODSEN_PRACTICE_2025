import { useState } from 'react';

import { ModalAddTask } from '@/components/modals';
import { ColorText } from '@/components/ui';
import { IOption } from '@/utils';

import { Button } from './styled';

interface ITodoColumnTaskAddProps {
  status: IOption;
}

export const TodoColumnTaskAdd = ({ status }: ITodoColumnTaskAddProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleTaskModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <Button type="button" color={status.color} onClick={toggleTaskModal}>
        <ColorText color={status.color} text="Add task..." />
      </Button>
      {isModalOpen && <ModalAddTask onClose={toggleTaskModal} status={status} />}
    </>
  );
};
