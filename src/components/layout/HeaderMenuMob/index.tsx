import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ModalAddColumn, ModalAddTask } from '@/components/modals';
import { BtnMenuItem } from '@/components/ui';
import { UITexts } from '@/constants';
import { useBodyScrollBlock } from '@/hooks';
import { toggleMenuMob } from '@/store/actions';
import { IInitialMenuMobState } from '@/store/reducer';

import { Block } from './styled';

export const HeaderMenuMob = () => {
  const [isColumnModalOpen, setIsColumnModalOpen] = useState<boolean>(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState<boolean>(false);

  const isOpenMenuMob = useSelector((state: IInitialMenuMobState) => state.isOpen);
  const dispatch = useDispatch();

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
