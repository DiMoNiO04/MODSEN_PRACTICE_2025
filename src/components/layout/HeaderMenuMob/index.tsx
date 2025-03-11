import { useState } from 'react';

import { ModalAddColumn, ModalAddTask } from '@/components/modals';
import { BtnMenuItem } from '@/components/ui';
import { UITexts } from '@/constants';
import { IMobileMenu } from '@/utils/interfaces';

import { Block } from './styled';

export const HeaderMenuMob = ({ isOpen, onClick }: IMobileMenu) => {
  const [isColumnModalOpen, setIsColumnModalOpen] = useState<boolean>(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState<boolean>(false);

  const toggleColumnModal = () => {
    setIsColumnModalOpen((prev) => !prev);
    onClick();
  };

  const toggleTaskModal = () => {
    setIsTaskModalOpen((prev) => !prev);
    onClick();
  };

  return (
    <>
      <Block $isOpen={isOpen}>
        <BtnMenuItem onClick={toggleColumnModal} text={UITexts.COLUMN.ADD_NEW} />
        <BtnMenuItem onClick={toggleTaskModal} text={UITexts.TASK.ADD_NEW} />
      </Block>

      {isColumnModalOpen && <ModalAddColumn onClose={() => setIsColumnModalOpen(false)} />}
      {isTaskModalOpen && <ModalAddTask onClose={() => setIsTaskModalOpen(false)} isFromHeader />}
    </>
  );
};
