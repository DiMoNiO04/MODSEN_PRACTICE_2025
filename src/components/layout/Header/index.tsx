import { HeaderBtnAdd } from '@/components/blocks';
import { Logo } from '@/components/ui';

import { Container } from '..';
import { HeaderBlock, HeaderContainer } from './styled';

export const Header = () => {
  return (
    <HeaderBlock>
      <Container>
        <HeaderContainer>
          <Logo />
          <HeaderBtnAdd />
        </HeaderContainer>
      </Container>
    </HeaderBlock>
  );
};
