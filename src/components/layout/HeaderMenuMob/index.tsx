import { BtnMenuItem } from '@/components/ui';
import { UITexts } from '@/constants';
import { useBodyScrollBlock } from '@/hooks';
import { closeMenuMob } from '@/store/menuMob/actions';
import { openModaColumnAdd } from '@/store/modalColumnAdd/actions';
import { toggleModalTaskAdd } from '@/store/modalTaskAdd/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';

import { Block } from './styled';

export const HeaderMenuMob = () => {
  const isOpenMenuMob = useAppSelector((state) => state.menuMob.isOpen);
  const dispatch = useAppDispatch();

  const handleCloseMenuMob = () => dispatch(closeMenuMob());
  const openColumnModalAdd = () => dispatch(openModaColumnAdd());
  const toggleTaskModalAdd = () => dispatch(toggleModalTaskAdd());

  const openColumnModal = () => {
    openColumnModalAdd();
    handleCloseMenuMob();
  };

  const toggleTaskModal = () => {
    toggleTaskModalAdd();
    handleCloseMenuMob();
  };

  useBodyScrollBlock(isOpenMenuMob);

  return (
    <Block $isOpen={isOpenMenuMob}>
      <BtnMenuItem onClick={openColumnModal} text={UITexts.COLUMN.ADD_NEW} />
      <BtnMenuItem onClick={toggleTaskModal} text={UITexts.TASK.ADD_NEW} />
    </Block>
  );
};
