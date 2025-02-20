import styled from 'styled-components';
import { Container } from '..';
import { BtnRound, Logo } from '@/components/ui';

const HeaderBlock = styled.header`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 100;
  background-color: #f8fafc;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
`;

export const Header = () => {
  return (
    <HeaderBlock>
      <Container>
        <HeaderContainer>
          <Logo />
          <BtnRound hasBorder handle={() => alert('Добавление таски')} type="add" />
        </HeaderContainer>
      </Container>
    </HeaderBlock>
  );
};
