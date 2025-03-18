import { useBodyScrollBlock } from '@/hooks';
import { closeMenuMob, openMenuMob } from '@/store/menuMob/actions';
import { useAppDispatch, useAppSelector } from '@/store/store';

import { BurgerButton, BurgerButtonLine } from './styled';

export const BurgerBtn = () => {
  const { isOpen } = useAppSelector((state) => state.menuMob);
  const dispatch = useAppDispatch();

  const onClickBurgerBtn = () => {
    if (isOpen) {
      dispatch(closeMenuMob());
    } else {
      dispatch(openMenuMob());
    }
  };

  useBodyScrollBlock(isOpen);

  return (
    <BurgerButton className={isOpen ? 'active' : ''} onClick={onClickBurgerBtn}>
      <BurgerButtonLine />
      <BurgerButtonLine />
      <BurgerButtonLine />
    </BurgerButton>
  );
};
