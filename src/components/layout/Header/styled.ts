import styled from 'styled-components';

import { BREAKPOINTS } from '@/utils/breakpoints';

const HeaderBlock = styled.header`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: var(--index-xl);
  background-color: var(--color-light);

  @media (max-width: ${BREAKPOINTS.mobile}) {
    background-color: var(--color-white);
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-xxl);

  @media (max-width: ${BREAKPOINTS.mobile}) {
    padding: var(--padding-m) var(--padding-l);
  }
`;

export { HeaderBlock, HeaderContainer };
