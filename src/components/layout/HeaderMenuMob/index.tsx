import { BtnMenuItem } from '@/components/ui';
import { UITexts } from '@/constants';
import { useBodyScrollBlock } from '@/hooks';
import { toggleMenuMob } from '@/store/menuMob/actions';
import { toggleModaColumnAdd } from '@/store/modalColumnAdd/actions';
import { toggleModalTaskAdd } from '@/store/modalTaskAdd/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';

import { Block } from './styled';

export const HeaderMenuMob = () => {
  const isOpenMenuMob = useAppSelector((state) => state.menuMob.isOpen);
  const dispatch = useAppDispatch();

  const onClickBurgerBtn = () => dispatch(toggleMenuMob());
  const toggleColumnModalAdd = () => dispatch(toggleModaColumnAdd());
  const toggleTaskModalAdd = () => dispatch(toggleModalTaskAdd());

  const toggleColumnModal = () => {
    toggleColumnModalAdd();
    onClickBurgerBtn();
  };

  const toggleTaskModal = () => {
    toggleTaskModalAdd();
    onClickBurgerBtn();
  };

  useBodyScrollBlock(isOpenMenuMob);

  return (
    <Block $isOpen={isOpenMenuMob}>
      <BtnMenuItem onClick={toggleColumnModal} text={UITexts.COLUMN.ADD_NEW} />
      <BtnMenuItem onClick={toggleTaskModal} text={UITexts.TASK.ADD_NEW} />
    </Block>
  );
};
