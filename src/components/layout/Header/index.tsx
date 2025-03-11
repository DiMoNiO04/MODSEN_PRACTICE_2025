import { useState } from 'react';

import { HeaderBtnAdd } from '@/components/blocks';
import { BurgerBtn, Logo } from '@/components/ui';

import { Container, HeaderMenuMob } from '..';
import { HeaderBlock, HeaderContainer } from './styled';

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClickBurgerBtn = () => {
    document.body.classList.toggle('--lock');
    setIsOpen(!isOpen);
  };

  return (
    <HeaderBlock>
      <Container>
        <HeaderContainer>
          <BurgerBtn isOpen={isOpen} onClick={onClickBurgerBtn} />
          <HeaderMenuMob isOpen={isOpen} onClick={onClickBurgerBtn} />
          <Logo />
          <HeaderBtnAdd />
        </HeaderContainer>
      </Container>
    </HeaderBlock>
  );
};
