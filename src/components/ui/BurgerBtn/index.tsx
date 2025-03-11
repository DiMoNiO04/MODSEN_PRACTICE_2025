import { useBodyScrollBlock } from '@/hooks';
import { toggleMenuMob } from '@/store/menuMob/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';

import { BurgerButton, BurgerButtonLine } from './styled';

export const BurgerBtn = () => {
  const isOpenMenuMob = useAppSelector((state) => state.menuMob.isOpen);
  const dispatch = useAppDispatch();

  const onClickBurgerBtn = () => dispatch(toggleMenuMob());

  useBodyScrollBlock(isOpenMenuMob);

  return (
    <BurgerButton className={isOpenMenuMob ? 'active' : ''} onClick={onClickBurgerBtn}>
      <BurgerButtonLine />
      <BurgerButtonLine />
      <BurgerButtonLine />
    </BurgerButton>
  );
};
