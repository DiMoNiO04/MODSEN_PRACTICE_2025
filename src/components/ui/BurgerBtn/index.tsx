import { IMobileMenu } from '@/utils/interfaces';

import { BurgerButton, BurgerButtonLine } from './styled';

export const BurgerBtn = ({ isOpen, onClick }: IMobileMenu) => {
  return (
    <BurgerButton className={isOpen ? 'active' : ''} onClick={onClick}>
      <BurgerButtonLine />
      <BurgerButtonLine />
      <BurgerButtonLine />
    </BurgerButton>
  );
};
