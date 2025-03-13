import { useBodyScrollBlock } from '@/hooks';
import { closeMenuMob, openMenuMob } from '@/store/menuMob/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';

import { BurgerButton, BurgerButtonLine } from './styled';

export const BurgerBtn = () => {
  const isOpenMenuMob = useAppSelector((state) => state.menuMob.isOpen);
  const dispatch = useAppDispatch();

  const onClickBurgerBtn = () => {
    if (isOpenMenuMob) {
      dispatch(closeMenuMob());
    } else {
      dispatch(openMenuMob());
    }
  };

  useBodyScrollBlock(isOpenMenuMob);

  return (
    <BurgerButton className={isOpenMenuMob ? 'active' : ''} onClick={onClickBurgerBtn}>
      <BurgerButtonLine />
      <BurgerButtonLine />
      <BurgerButtonLine />
    </BurgerButton>
  );
};
