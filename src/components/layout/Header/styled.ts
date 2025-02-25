import styled from 'styled-components';

const HeaderBlock = styled.header`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: var(--index-xl);
  background-color: var(--color-light);
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-xxl);
`;

export { HeaderBlock, HeaderContainer };
