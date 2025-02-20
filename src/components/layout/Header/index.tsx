import { Container } from '..';
import { Logo } from '@/components/ui';
import { HeaderBtnAdd } from '@/components/HeaderBtnAdd';
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
