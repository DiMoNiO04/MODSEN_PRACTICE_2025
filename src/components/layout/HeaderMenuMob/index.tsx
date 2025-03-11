import { useState } from 'react';

import { ModalAddColumn, ModalAddTask } from '@/components/modals';
import { BtnMenuItem } from '@/components/ui';
import { UITexts } from '@/constants';
import { useBodyScrollBlock } from '@/hooks';
import { toggleMenuMob } from '@/store/menuMob/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';

import { Block } from './styled';

export const HeaderMenuMob = () => {
  const [isColumnModalOpen, setIsColumnModalOpen] = useState<boolean>(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState<boolean>(false);

  const isOpenMenuMob = useAppSelector((state) => state.menuMob.isOpen);
  const dispatch = useAppDispatch();

  const onClickBurgerBtn = () => dispatch(toggleMenuMob());

  const toggleColumnModal = () => {
    setIsColumnModalOpen((prev) => !prev);
    onClickBurgerBtn();
  };

  const toggleTaskModal = () => {
    setIsTaskModalOpen((prev) => !prev);
    onClickBurgerBtn();
  };

  useBodyScrollBlock(isOpenMenuMob);

  return (
    <>
      <Block $isOpen={isOpenMenuMob}>
        <BtnMenuItem onClick={toggleColumnModal} text={UITexts.COLUMN.ADD_NEW} />
        <BtnMenuItem onClick={toggleTaskModal} text={UITexts.TASK.ADD_NEW} />
      </Block>

      {isColumnModalOpen && <ModalAddColumn onClose={() => setIsColumnModalOpen(false)} />}
      {isTaskModalOpen && <ModalAddTask onClose={() => setIsTaskModalOpen(false)} isFromHeader />}
    </>
  );
};
