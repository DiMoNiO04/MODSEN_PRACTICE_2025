import { useDispatch, useSelector } from 'react-redux';

import { useBodyScrollBlock } from '@/hooks';
import { toggleMenuMob } from '@/store/actions';
import { IInitialMenuMobState } from '@/store/reducer';

import { BurgerButton, BurgerButtonLine } from './styled';

export const BurgerBtn = () => {
  const isOpenMenuMob = useSelector((state: IInitialMenuMobState) => state.isOpen);
  const dispatch = useDispatch();

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
