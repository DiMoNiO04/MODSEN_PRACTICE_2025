import { forwardRef, useState } from 'react';

import { ModalAddColumn, ModalAddTask } from '@/components/modals';
import { BtnMenuItem, Dropdown } from '@/components/ui';
import { UITexts } from '@/constants';

export const HeaderDropdown = forwardRef<HTMLDivElement>((_, ref) => {
  const [isColumnModalOpen, setIsColumnModalOpen] = useState<boolean>(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState<boolean>(false);

  const toggleColumnModal = () => setIsColumnModalOpen((prev) => !prev);
  const toggleTaskModal = () => setIsTaskModalOpen((prev) => !prev);

  return (
    <>
      <Dropdown ref={ref}>
        <BtnMenuItem onClick={toggleColumnModal} text={UITexts.COLUMN.ADD_NEW} />
        <BtnMenuItem onClick={toggleTaskModal} text={UITexts.TASK.ADD_NEW} />
      </Dropdown>
      {isColumnModalOpen && <ModalAddColumn onClose={toggleColumnModal} />}
      {isTaskModalOpen && <ModalAddTask onClose={toggleTaskModal} isFromHeader />}
    </>
  );
});
