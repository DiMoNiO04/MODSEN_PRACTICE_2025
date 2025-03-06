import { useState } from 'react';

import { BurgerButton, BurgerButtonLine } from './styled';

export const BurgerBtn = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <BurgerButton className={isOpen ? 'active' : ''} onClick={() => setIsOpen(!isOpen)}>
      <BurgerButtonLine />
      <BurgerButtonLine />
      <BurgerButtonLine />
    </BurgerButton>
  );
};
