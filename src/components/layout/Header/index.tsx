import { HeaderBtnAdd } from '@/components/blocks';
import { BurgerBtn, Logo } from '@/components/ui';

import { Container } from '..';
import { HeaderBlock, HeaderContainer } from './styled';

export const Header = () => {
  return (
    <HeaderBlock>
      <Container>
        <HeaderContainer>
          <BurgerBtn />
          <Logo />
          <HeaderBtnAdd />
        </HeaderContainer>
      </Container>
    </HeaderBlock>
  );
};
