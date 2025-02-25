import { forwardRef, useState } from 'react';

import { ModalAddColumn, ModalAddTask } from '../modals';
import { BtnMenuItem, Dropdown } from '../ui';

export const HeaderDropdown = forwardRef<HTMLDivElement>((_, ref) => {
  const [isColumnModalOpen, setIsColumnModalOpen] = useState<boolean>(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState<boolean>(false);

  const toggleColumnModal = () => setIsColumnModalOpen((prev) => !prev);
  const toggleTaskModal = () => setIsTaskModalOpen((prev) => !prev);

  return (
    <>
      <Dropdown ref={ref}>
        <BtnMenuItem onClick={toggleColumnModal} text="Add new column" />
        <BtnMenuItem onClick={toggleTaskModal} text="Add new task" />
      </Dropdown>
      {isColumnModalOpen && <ModalAddColumn onClose={toggleColumnModal} />}
      {isTaskModalOpen && <ModalAddTask onClose={toggleTaskModal} isFromHeader />}
    </>
  );
});
